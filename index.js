
function saturdayFun(defaultActivity='roller-skate') {
    return`This Saturday, I want to ${defaultActivity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

function mondayWork(defActivity='go to the office') {
    return`This Monday, I will ${defActivity}.`;
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(style=''){
    return function (condition='special'){
        return `You are ${style}${condition}${style}!`
    }
}
    