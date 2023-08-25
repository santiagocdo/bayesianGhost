trialIterator = 1;


// # # # # (1) create a random sample sized all videos within stim/ # # # # 
let randTrialsAllTest = jsPsych.randomization.repeat(stimArrayTest, 1); //shuffled array no repeats
const randTrialsTest = randTrialsAllTest.slice(0, numberTrialsTest);

// prepare specific practice videos (all communicative and randomized left and right)
const squatDown = ["noi001_act01_scr0_con1_tri005.mp4","noi001_act06_scr0_con1_tri009.mp4"];
const lookCeiling = ["noi001_act03_scr0_con1_tri018.mp4","noi001_act08_scr0_con1_tri020.mp4"];
const sitDown = ["noi001_act05_scr0_con1_tri016.mp4","noi001_act10_scr0_con1_tri019.mp4"];
let squatDown2 = jsPsych.randomization.repeat(squatDown, 1);
let lookCeiling2 = jsPsych.randomization.repeat(lookCeiling, 1);
let sitDown2 = jsPsych.randomization.repeat(sitDown, 1);
const squatDown3 = squatDown2.slice(0, 1);
const lookCeiling3 = lookCeiling2.slice(0, 1);
const sitDown3 = sitDown2.slice(0, 1);

randTrialsAllPractice = [squatDown3, lookCeiling3, sitDown3];
randTrialsPractice = randTrialsAllPractice.slice(0, 3);    

// Original and woring random practice videos (i.e., with low noise dots)
// let randTrialsAllPractice = jsPsych.randomization.repeat(stimArrayPractice, 1); //shuffled array no repeats
// const randTrialsPractice = randTrialsAllPractice.slice(0, numberTrialsPractice);                  


// # # # # (2) define trial videos location # # # # 
// trials
let ghostTest = [];
for (let i = 0; i < randTrialsTest.length; i++) {
    ghostTest.push("stim/test/" + randTrialsTest[i])
}
let ghostPractice = [];
for (let i = 0; i < randTrialsPractice.length; i++) {
    ghostPractice.push("stim/practice/" + randTrialsPractice[i])
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
let trialsPractice = [];
// add ghost videos' location to trialsPractice array
for (let i = 0; i < randTrialsPractice.length; i++) {
    trialsPractice.push({
        stimulus: [ghostPractice[i]],
        data: {
            stim: ghostPractice[i]
        }
    });
}