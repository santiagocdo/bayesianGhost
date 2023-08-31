let timeline = [];

// hello
let instructions0 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Hello and thank you for taking part in our experiment! </p>' +
    '<p style="font-size:24px;"> The experiment consist of a Human Detection Task followed by some questionnaires, and it takes around 30 minutes to complete. </p>' +
    '<p style="font-size:22px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// please be in the task
let instructions1 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Please ensure the following: </p>' +
    '<p style="font-size:22px;"> (1) You are in a room with no distractions (no people, music, phones, etc.), </p>' +
    '<p style="font-size:22px;"> (2) For the next 30 minutes, you will be able to stay focused on the task and questionnaires, </p>' +
    '<p style="font-size:22px;"> As the study progresses, you may find that you start to feel tired. Please do your best to stay focused throughout, since our research depends on it! </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// first description of the stimuli/videos
let instructions2 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Human Detection Task </p>' +
    '<p style="font-size:22px;"> In this task, you will see a series of videos containing one or two people. </p>' +
    '<p style="font-size:22px;"> In half of the videos there will be two people -one on each side of the screen-, but one person will be masked with moving dots. </p>' +
    '<p style="font-size:22px;"> For the other half of the videos there will be only one person on one side, and on the other side there will be only moving  dots. </p>' +
    '<p style="font-size:22px;"> In the next screen, you will see three example videos with two people. One person will be masked with few moving dots. You do not need to do anything now, just see. </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// fixation for the trial
let fixation = {
  type: "html-keyboard-response",
  stimulus: '<div style="font-size:60px; color:white;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000
};

// trial object
let trial = {
  type: "video-keyboard-response",
  sources: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  response_allowed_while_playing: false, // Sant 15/08/2023
  trial_ends_after_video: true,
  response_ends_trial: false,
};

// videos with two people
let procedureSignalExample = {
  timeline: [trial],
  timeline_variables: trialSignalExample,
  choices: [70, 74],
};

// after seeing videos with two people
let instructions3 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Human Detection Task </p>' +
    '<p style="font-size:22px;"> In these videos you should have seen two people, one on each side of the screen. </p>' +
    '<p style="font-size:22px;"> As you may have noticed, one of the human shapes had extra moving dots and less dots conforming the human shape. But you are still able to idenfity a human form. </p>' +
    '<p style="font-size:22px;"> In the next screen, you will see three example videos with only one person on one side, and on the other side you will only see moving dots. </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// videos with one person
let procedureNoiseExample = {
  timeline: [fixation, trial],
  timeline_variables: trialNoiseExample,
  choices: [70, 74],
};

// after seeing videos with one person
let instructions4 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Human Detection Task </p>' +
    '<p style="font-size:22px;"> Your job will be to detect if there is a person within the moving dots part of the screen. </p>' +
    '<p style="font-size:22px;"> For each video, please report as accurately as possible whether you saw two people or only one. </p>' +
    '<p style="font-size:22px;"> Press "J" for saying "Yes, I saw a second person". </p>' +
    '<p style="font-size:22px;"> Press "F" to say "No, I did not see a second person". </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// behavioural instructions and keyboard presses
let instructions5 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:22px;"> After detecting ("J") or not detecting ("F") the second person, you will be asked how confident you were with your choice. </p>' + 
    '<p style="font-size:22px;"> Press 1, 2, 3, 4, or 5 on your keyboard to rate your confidence level, where 1 is not confident at all and 5 is very confident. </p>' + 
    '<p style="font-size:22px;"> The task consist in 72 test videos, which will not be as easy as the example videos that you just saw. </p>' + 
    '<p style="font-size:24px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// ready to start?
let instructions6 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:22px;"> Finally, after this screen you will start the task. </p>' +
    '<p style="font-size:22px;"> If you are ready to start and coompleting the study and responding the questionnaires then: </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to start. </i> </p>',
  choices: [32],
};

// behaviour - detection
let detection = {
  type: "html-keyboard-response",
  stimulus: '<div style="font-size:24px; color:white;">Did you see a second person in the moving dots?</div>' + 
    '<p style="font-size:24px;"> <i> Press "F" for No or "J" for Yes. </i> </p>',
  data: jsPsych.timelineVariable("data"),
  choices: [70, 74],
  on_finish: function (data) {
    data.index = trialIterator;
    data.workerId = workerId;
    let response = data.key_press;
    switch (response) {
      case 70: 
        data.response = "no";
      break;
      case 74:
        data.response = "yes";
      break;
    }
  }
};

// behaviour - confidence
let confidence = {
  type: "html-keyboard-response",
  stimulus: '<div style="font-size:24px; color:white;">How confident are you? (from 1 to 5)</div>'+ 
  '<p style="font-size:24px;"> <i> 1 = Not confident at all, 5 = Very confident. </i> </p>',
  data: jsPsych.timelineVariable("data"),
  choices: [49, 50, 51, 52, 53],
  on_finish: function (data) {
    data.index = trialIterator;
    data.workerId = workerId;
    trialIterator ++;
    let response = data.key_press;
    switch (response) {
      case 49:
        data.response = "1";
      break;
      case 50: 
        data.response = "2";
      break;
      case 51: 
        data.response = "3";
      break;
      case 52: 
        data.response = "4";
      break;
      case 53: 
        data.response = "5";
      break;
    }
  }
};

// test trial procedure
let procedureTest = {
  timeline: [fixation, trial, detection, confidence],
  timeline_variables: trialsTest,
  choices: [70, 74],
};

// save data at the end of task
let dataSave = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Data saving...</p>" +
    '<div class="sk-cube-grid">' +
    '<div class="sk-cube sk-cube1"></div>' +
    '<div class="sk-cube sk-cube2"></div>' +
    '<div class="sk-cube sk-cube3"></div>' +
    '<div class="sk-cube sk-cube4"></div>' +
    '<div class="sk-cube sk-cube5"></div>' +
    '<div class="sk-cube sk-cube6"></div>' +
    '<div class="sk-cube sk-cube7"></div>' +
    '<div class="sk-cube sk-cube8"></div>' +
    '<div class="sk-cube sk-cube9"></div>' +
    '</div>' +
    "<p style='color:white;'>Do not close this window until the text dissapears.</p>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function () {
    saveData("ghost_" + workerId, jsPsych.data.get().csv()); //function with file name and which type of file as the 2 arguments
    document.getElementById("unload").onbeforeunload = ''; //removes popup (are you sure you want to exit) since data is saved now
    // returns cursor functionality
    $(document).ready(function () {
      $("body").addClass("showCursor"); // returns cursor functionality
      // closeFullscreen(); // kill fullscreen
    });
  }
};

let end = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Thank you!</p>" +
    "<p style='color:white;'>You have successfully completed the Human Detection Task and your data has been saved.</p>" +
    "<p style='color:white;'>To proceed to the next section of this experiment, please click the following link:</p>" +
    // "<p style='color:white;'>To leave feedback on this task, please click the following link:</p>"+
    "<p style='color:white;'><a href="+ feedbackLink +">Go to questionnaires!</a></p>",
    // "<p style='color:white;'>Please wait for the experimenter to continue.</p>"+
    //"<p style='color:white;'><i>You may now close the expriment window at anytime.</i></p>",
  choices: jsPsych.NO_KEYS,
  // on_load: function() {
  //   alert(reward);
  // }
};

$.getScript("exp/main.js");