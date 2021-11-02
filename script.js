let edu, networth, caste, skill, skills, age, res_age, reputation;
skills = [];
reputations = [];

let person = {
    bride_name: "",
    bride_price: NaN,
    bride_ll: "",
    bride_edu: NaN,
    bride_networth: NaN,
    bride_caste: "",
    bride_age: NaN
};

document.getElementById("submit").addEventListener("click", () => {

        let start = document.getElementById("start_bid").value;
        start = parseInt(start);
        person["bride_name"] = document.getElementById("fname").value;
        person["bride_edu"] = document.getElementById("education").value;
        person["bride_age"] = document.getElementsByName("age");
        person["bride_caste"] = document.getElementById("caste").value;
        person["bride_networth"] = document.getElementById("networth").value;
        person["bride_ll"] = document.getElementById("ll").value;
        skill = document.getElementsByName("skill");
        reputation = document.getElementsByName("reputation");
        const bride_price = document.getElementById("start_bid").required;
        const bride_name = document.getElementById("fname").required;
        console.log(bride_price, bride_name);
        console.log(document.getElementById("start_bid").value, document.getElementById("fname").value)
        if ( bride_name === false && bride_price === false ){
            stop();
        }
        for(let i = 0; i < person.bride_age.length; i++) {
            if(person.bride_age[i].checked){
                res_age = person.bride_age[i].value;
                break;
            }
        }
        let j = 0;
        for(let i = 0; i < skill.length; i++) {
            if (skill[i].checked){
                skills[j] = skill[i].value;
                j++;
            }
        }
        let k = 0;
        for (let i = 0; i < reputation.length; i++) {
            if (reputation[i].checked){
                reputations[k] = reputation[i].value;
                k++;
            }
        }
        start *= person["bride_edu"];

        console.log(start);
        start *= person["bride_networth"];

        console.log(start);
        if (person.bride_caste !== 'varna'){
            person.bride_caste = parseInt(person.bride_caste);
            start += person.bride_caste;
        }else {
            start -= 50;
        }
        for (let i = 0; i < skills.length; i++){
            start += parseInt(skills[i]);
        }

        start *= res_age;

        console.log(start);
        let coef = 1;
        if (!reputations){
            for (let i = 0; i < reputations.length; i++){
                coef *= reputations[i];
            }
        }
        console.log(start);
        start *= coef;
        person["bride_price"] = start;
        document.getElementById("answer").innerHTML = "The bride will cost for "+ person["bride_name"] + ": " + person["bride_price"].toFixed(3) + "$";
        document.getElementById("lovel").innerHTML += "<h1>Her/his love letter:</h1>  <br>" + person.bride_ll;
    }
)