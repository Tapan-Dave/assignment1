const pastaorder1 = require("./pastaorder1");

const pastaorder1State = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    flavour: Symbol("penne"),
    flavour: Symbol("linguine"),
    SIZE:   Symbol("size"),
    TOPPINGS:   Symbol("toppings"),
    DRINKS:  Symbol("drinks")
});

module.exports = class pastaready3 extends pastaorder1{
    constructor(){
        super();
        this.stateCur = pastaorder1State.WELCOMING;
        this.sflavour = "veg"
        this.sSize = "";
        this.sToppings = "";
        this.sDrinks = "";
        this.sItem = "pizza";
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur){
            case pastaorder1State.WELCOMING:
                this.stateCur = pastaorder1State.SIZE;
                aReturn.push("Welcome to pasta station");
                aReturn.push("You want penne or linguine");
                break;
                //case ( (pageid === "listing-page") || (pageid === ("home-page") ):
                   // alert("hello");
                   // break;
            case pastaorder1State.SIZE:
                this.stateCur = pastaorder1State.TOPPINGS
                this.sSize = sInput;
                aReturn.push("What toppings would you like?");
                break;
            case pastaorder1State.TOPPINGS:
                this.stateCur = pastaorder1State.DRINKS
                this.sToppings = sInput;
                aReturn.push("Would you like drinks with that?");
                break;
            case pastaorder1State.DRINKS:
                this.isDone(true);
                if(sInput.toLowerCase != "no"){
                    this.sDrinks = sInput;
                }
                aReturn.push("Thank-you for your order of");
                aReturn.push(`${this.sSize} ${this.sItem} with ${this.sToppings}`);
                if(this.sDrinks){
                    aReturn.push(this.sDrinks);
                }
                let d = new Date(); 
                d.setMinutes(d.getMinutes() + 20);
                aReturn.push(`Please pick it up at ${d.toTimeString()}`);
                break;
        }
        return aReturn;
    }
}