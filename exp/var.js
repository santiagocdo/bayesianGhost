trialIterator = 1;
let feedbackGenerator = '<div id="feedback" style="font-size:60px; color:white;">lol</div>';


// # # # # (1) create a random sample sized all videos within stim/ # # # # 
let randTrialsTestAll = jsPsych.randomization.repeat(stimArrayTest, 1); //shuffled array no repeats
const randTrialsTest = randTrialsTestAll.slice(0, numberTrialsTest);

// actions:
// # of action (right/left)
// 1/6:  Agent A (COM) = Ask to squat down;          Agent A (IND) = Turn around; Agent B = Squat down
// 3/8:  Agent A (COM) = Ask to look at the ceiling; Agent A (IND) = Sneezes;     Agent B = Look at the ceiling
// 5/10: Agent A (COM) = Ask to sit down;            Agent A (IND) = Drinks;      Agent B = Sit down

// prepare specific signal practice videos (all communicative and randomized left and right)
const squatDown   = ["noi005_act01_scr0_com0_sig10_tri079.mp4","noi005_act01_scr0_com1_sig10_tri020.mp4","noi005_act06_scr0_com0_sig10_tri033.mp4","noi005_act06_scr0_com1_sig10_tri040.mp4"];
const lookCeiling = ["noi005_act03_scr0_com0_sig10_tri056.mp4","noi005_act03_scr0_com1_sig10_tri024.mp4","noi005_act08_scr0_com0_sig10_tri023.mp4","noi005_act08_scr0_com1_sig10_tri010.mp4"];
const sitDown     = ["noi005_act05_scr0_com0_sig10_tri001.mp4","noi005_act05_scr0_com1_sig10_tri005.mp4","noi005_act10_scr0_com0_sig10_tri003.mp4","noi005_act10_scr0_com1_sig10_tri065.mp4"];
let squatDown2 = jsPsych.randomization.repeat(squatDown, 1);
let lookCeiling2 = jsPsych.randomization.repeat(lookCeiling, 1);
let sitDown2 = jsPsych.randomization.repeat(sitDown, 1);
const squatDown3 = squatDown2.slice(0, numberTrialsPractice);
const lookCeiling3 = lookCeiling2.slice(0, numberTrialsPractice);
const sitDown3 = sitDown2.slice(0, numberTrialsPractice);

// prepare specific scrambled practice videos (all individual and randomized left and right)
const turning  = ["noi005_act01_scr1_com0_sig10_tri002.mp4","noi005_act01_scr1_com1_sig10_tri029.mp4","noi005_act06_scr1_com0_sig10_tri038.mp4","noi005_act06_scr1_com1_sig10_tri013.mp4"];
const sneezing = ["noi005_act03_scr1_com0_sig10_tri016.mp4","noi005_act03_scr1_com1_sig10_tri027.mp4","noi005_act08_scr1_com0_sig10_tri015.mp4","noi005_act08_scr1_com1_sig10_tri008.mp4"];
const drinking = ["noi005_act05_scr1_com0_sig10_tri025.mp4","noi005_act05_scr1_com1_sig10_tri009.mp4","noi005_act10_scr1_com0_sig10_tri044.mp4","noi005_act10_scr1_com1_sig10_tri012.mp4"];
let turning2 = jsPsych.randomization.repeat(turning, 1);
let sneezing2 = jsPsych.randomization.repeat(sneezing, 1);
let drinking2 = jsPsych.randomization.repeat(drinking, 1);
const turning3 = turning2.slice(0, numberTrialsPractice);
const sneezing3 = sneezing2.slice(0, numberTrialsPractice);
const drinking3 = drinking2.slice(0, numberTrialsPractice);

// get only 3 randomly 
randTrialsPracticeAll = squatDown3.concat(lookCeiling3, sitDown3, turning3, sneezing3, drinking3);
randTrialsPractice = jsPsych.randomization.repeat(randTrialsPracticeAll, 1);        


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
            stim: ghostTest[i],
            noise: ghostTest[i].split("_")[0].slice(-3),
            action: ghostTest[i].split("_")[1].slice(3,5),
            scramble: ghostTest[i].split("_")[2].slice(3,4),
            communicative: ghostTest[i].split("_")[3].slice(3,4),
            trial_number: ghostTest[i].split("_")[4].slice(3,-4),
        }
        
    });
}
let trialsPractice = []
// add ghost videos' location to trialsPractice array
for (let i = 0; i < randTrialsPractice.length; i++) {
    trialsPractice.push({
        stimulus: [ghostPractice[i]],
        data: {
            stim: ghostPractice[i],
            noise: ghostPractice[1].split("_")[0].slice(17,20),
            action: ghostPractice[i].split("_")[1].slice(3,5),
            scramble: ghostPractice[i].split("_")[2].slice(3,4),
            communicative: ghostPractice[i].split("_")[3].slice(3,4),
            trial_number: ghostPractice[i].split("_")[4].slice(3,-4),
        }
    });
}
