describe("Momenton API Test", () => {
    function validateMeta(responseBody) {
        expect(responseBody.meta.name).to.equal("openaq-api");
        expect(responseBody.meta.license).to.equal("CC BY 4.0");
        expect(responseBody.meta.website).to.equal("https://docs.openaq.org/");
        expect(responseBody.meta.page).to.be.number();
        expect(responseBody.meta.limit).to.be.number();
        expect(responseBody.meta.found).to.be.number();
    }

    let auCitiesCount;

    it("GET Countries Test", async () => {
        let countries = await superagent.get("https://api.openaq.org/v1/countries");
        validateMeta(countries.body);

        let noCountryNamesList = [];
        countries.body.results.forEach((result) => {
            // console.log("result", JSON.stringify(result));
            expect(result.code).to.be.string();
            expect(result.count).to.be.number();
            expect(result.locations).to.be.number();
            expect(result.cities).to.be.number();

            if (result.name) {
                expect(result.name).to.be.string();
            } else {
                noCountryNamesList.push(result);
            }
        });
        // console.log("noCountryNamesList", JSON.stringify(noCountryNamesList, null, 2));

        auCitiesCount = _.find(countries.body.results, { code: "AU" }).cities;
        // console.log("auCitiesCount", auCitiesCount);
    });

    it("GET Cities Test", async () => {
        let cities = await superagent.get("https://api.openaq.org/v1/cities?country=AU");
        validateMeta(cities.body);
        expect(cities.body.meta.found).to.equal(auCitiesCount);

        cities.body.results.forEach((result) => {
            // console.log("result", JSON.stringify(result));
            expect(result.country).to.equal("AU");
            expect(result.name).to.be.string();
            expect(result.count).to.be.number();
            expect(result.locations).to.be.number();
        });
    });
});
