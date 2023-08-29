trialIterator = 1;


// # # # # (1) create a random sample sized all videos within stim/ # # # # 
let randTrialsTestAll = jsPsych.randomization.repeat(stimArrayTest, 1); //shuffled array no repeats
const randTrialsTest = randTrialsTestAll.slice(0, numberTrialsTest);

// prepare specific example videos (all communicative and randomized left and right)
const squatDown   = ["noi001_act01_scr0_con0_tri033.mp4","noi001_act01_scr0_con1_tri005.mp4","noi001_act06_scr0_con0_tri038.mp4","noi001_act06_scr0_con1_tri009.mp4"];
const lookCeiling = ["noi001_act03_scr0_con0_tri048.mp4","noi001_act03_scr0_con1_tri018.mp4","noi001_act08_scr0_con0_tri042.mp4","noi001_act08_scr0_con1_tri020.mp4"];
const sitDown     = ["noi001_act05_scr0_con0_tri015.mp4","noi001_act05_scr0_con1_tri016.mp4","noi001_act10_scr0_con0_tri014.mp4","noi001_act10_scr0_con1_tri019.mp4"];
let squatDown2 = jsPsych.randomization.repeat(squatDown, 1);
let lookCeiling2 = jsPsych.randomization.repeat(lookCeiling, 1);
let sitDown2 = jsPsych.randomization.repeat(sitDown, 1);
const squatDown3 = squatDown2.slice(0, 1);
const lookCeiling3 = lookCeiling2.slice(0, 1);
const sitDown3 = sitDown2.slice(0, 1);

// prepare specific example videos (all individual and randomized left and right)
const turning  = ["noi001_act01_scr1_con0_tri006.mp4","noi001_act01_scr1_con1_tri017.mp4","noi001_act06_scr1_con0_tri027.mp4","noi001_act06_scr1_con1_tri029.mp4"];
const sneezing = ["noi001_act03_scr1_con0_tri073.mp4","noi001_act03_scr1_con1_tri008.mp4","noi001_act08_scr1_con0_tri003.mp4","noi001_act08_scr1_con1_tri001.mp4"];
const drinking = ["noi001_act05_scr1_con0_tri052.mp4","noi001_act05_scr1_con1_tri002.mp4","noi001_act10_scr1_con0_tri011.mp4","noi001_act10_scr1_con1_tri010.mp4"];
let turning2 = jsPsych.randomization.repeat(turning, 1);
let sneezing2 = jsPsych.randomization.repeat(sneezing, 1);
let drinking2 = jsPsych.randomization.repeat(drinking, 1);
const turning3 = turning2.slice(0, 1);
const sneezing3 = sneezing2.slice(0, 1);
const drinking3 = drinking2.slice(0, 1);

// get only 3 randomly 
randSignalExampleAll = [squatDown3, lookCeiling3, sitDown3];
randNoiseExampleAll = [turning3, sneezing3, drinking3];
randSignalExample = randSignalExampleAll.slice(0, 3);
randNoiseExample = randNoiseExampleAll.slice(0, 3);

// Original and woring random practice videos (i.e., with low noise dots)
// let randTrialsAllPractice = jsPsych.randomization.repeat(stimArrayPractice, 1); //shuffled array no repeats
// const randTrialsPractice = randTrialsAllPractice.slice(0, numberTrialsPractice);                  


// # # # # (2) define trial videos location # # # # 
// trials
let ghostTest = [];
for (let i = 0; i < randTrialsTest.length; i++) {
    ghostTest.push("stim/test/" + randTrialsTest[i])
}
let ghostSignalExample = [];
for (let i = 0; i < randSignalExample.length; i++) {
    ghostSignalExample.push("stim/practice/" + randSignalExample[i])
}
let ghostNoiseExample = [];
for (let i = 0; i < randNoiseExample.length; i++) {
    ghostNoiseExample.push("stim/practice/" + randNoiseExample[i])
}


// # # # # (3) create trials object # # # # 
let trialsTest = [];
// add ghost videos' location to trialsTest array
for (let i = 0; i < randTrialsTest.length; i++) {
    trialsTest.push({
        stimulus: [ghostTest[i]],
        data: {
            stim: ghostTest[i]
        }
    });
}
let trialSignalExample = []
// add ghost videos' location to trialComExample array
for (let i = 0; i < randSignalExample.length; i++) {
    trialSignalExample.push({
        stimulus: [ghostSignalExample[i]],
        data: {
            stim: ghostSignalExample[i]
        }
    });
}
let trialNoiseExample = [];
// add ghost videos' location to trialIndExample array
for (let i = 0; i < randNoiseExample.length; i++) {
    trialNoiseExample.push({
        stimulus: [ghostNoiseExample[i]],
        data: {
            stim: ghostNoiseExample[i]
        }
    });
}
