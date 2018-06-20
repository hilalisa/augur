import "jest-environment-puppeteer";
import {UnlockedAccounts} from "./constants/accounts";
import {dismissDisclaimerModal} from "./helpers/dismiss-disclaimer-modal";

const url = `${process.env.AUGUR_URL}`;

jest.setTimeout(100000);

describe("Disputing", () => {
  beforeAll(async () => {
    await page.goto(url);

    // No idea what a 'typical' desktop resolution would be for our users.
    await page.setViewport({
      height: 1200,
      width: 1200
    });
  });

  describe("Basics", () => {
    it("should be shown the 'No-REP' message if your account has no REP", async () => {
    });

    it("should not be able to submit a dispute without REP", async () => {
    });
  });

  describe("Dispute Window", () => {
    it("should have days remaining be correct", async () => {
    });
    it("should have days remaining increment properly", async () => {
    });
    it("should have correct end date", async () => {
    });
    it("should update correctly when time is pushed and a new dispute window starts", async () => {
    });
    it("should create a new dispute window properly even when no markets were reported on or disputed in the previous dispute window", async () => {
    });
  });

  describe("Market Card", () => {
    describe("Dispute Bonds", () => {
      it("should have all of the dispute bonds on a market be equal to one another in the first dispute round", async () => {
      });
      it("should have dispute bonds be equal to twice the amount placed by the initial reporter in the first dispute round", async () => {
         // With markets reported on by the Designated Reporter, this is twice the stake placed by the Designated Reporter. 
         // With markets reported on in Open Reporting, this is twice the no-show bond. 
         // Test both.
      });
      it("should have the two numbers to the right of the progress bars be 'total staked so far in dispute bond / dispute bond target'", async () => {
      });
    });
    describe("Round Numbers", () => {
      it("should have round number be 1 while a market is waiting for its first Dispute window and while in its first round number", async () => {
      });
      it("should have round number increase if a dispute is successful and a market is waiting for or is in its next dispute window", async () => {
      });
    })
    describe("Listed Outcomes", () => {
      describe("Yes/No Market", () => {
        it("should have the market's reported-on outcome display correctly on the market card", async () => {
          // should be listed as the tentative winning outcome
          // should not have an associated dispute bond
        });
        it("should have no other outcomes listed when the tentative winning outcome is 'Market is Invalid'", async () => {
        });
        it("should have an associated dispute bond on 'Market is Invalid' when that is not the tentative winning outcome", async () => {
        });
        it("should have an associated dispute bond listed with each successfuly disputed outcome", async () => {
        });
      });
      describe("Categorical Market", () => {
        it("should have the market's reported-on outcome display correctly on the market card", async () => {
          // should be listed as the tentative winning outcome
          // should not have an associated dispute bond
        });
        it("should have 'Yes', 'No', and 'Market is Invalid' outcomes be present", async () => {
        });
        it("should have a tentative winning outcome, and the other two have associated dispute bonds", async () => {
        });
      });
      describe("Scalar Market", () => {
         it("should have the market's reported-on outcome display correctly on the market card", async () => {
          // should be listed as the tentative winning outcome
          // should not have an associated dispute bond
        });
        it("should have all market's outcomes be present, as well as 'Market is Invalid'", async () => {
        });
        it("should have a tentative winning outcome and all other outcomes will have an associated dispute bond", async () => {
        });
      });
    });
  });


  // const markets = ['Yes/No Market', 'Categorical Market', 'Scalar Market']

  // describe("Disputing Mechanisms", () => {  
  //   markets.forEach(function(market) {
  //     describe(market, () => {
  //       it("should be able to dispute on all outcomes", async () => {
  //       });
  //     });
  //   });
  // });
    

  describe("Disputing Mechanisms", () => {
    describe("Yes/No Market", () => {
      it("should be able to dispute on all outcomes", async () => {
      });
    });
    describe("Categorical Market", () => {
      it("should be able to dispute on all outcomes", async () => {
      });
    });
    describe("Scalar Market", () => {
      it("should be able to dispute on all outcomes", async () => {
      });
    });
  });
});