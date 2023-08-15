let timeline = [];

let instructions0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>" +
    "<p>It should take about 30 minutes.</p>" +
    "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32],
  on_finish: function (data) {
    data.index = 'lol';
  }
};

let fixation = {
  type: "html-keyboard-response",
  stimulus: '<div style="font-size:60px; color:white;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000
};

let trial = {
  type: "video-keyboard-response",
  sources: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  choices: [48, 49],
  response_allowed_while_playing: false, // Sant 15/08/2023
  trial_ends_after_video: true,
  response_ends_trial: false,
  on_finish: function (data) {
    data.index = trialIterator;
    data.workerId = workerId;
    trialIterator ++;
    // data.version = version;
    let response = data.key_press;
    // console.log(response);
    // let trialType = jsPsych.data.get().last(1).values()[0].test_part;
    switch (response) {
      case 48: 
        data.response = "noGhost";
        break;
      case 49:
        data.response = "ghost";
        break;
    }
  }
};

let detection = {

}

let confidence = {
  
}

let procedureTest = {
  timeline: [fixation, trial],
  timeline_variables: testTrials,
  choices: [48, 49],
};

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
    saveData("task_" + workerId, jsPsych.data.get().csv()); //function with file name and which type of file as the 2 arguments
    document.getElementById("unload").onbeforeunload = ''; //removes popup (are you sure you want to exit) since data is saved now
    // returns cursor functionality
    $(document).ready(function () {
      $("body").addClass("showCursor"); // returns cursor functionality
      closeFullscreen(); // kill fullscreen
    });
  }
};

let end = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Thank you!</p>" +
    "<p style='color:white;'>You have successfully completed the experiment and your data has been saved.</p>" +
    // "<p style='color:white;'>To leave feedback on this task, please click the following link:</p>"+
    // "<p style='color:white;'><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
    // "<p style='color:white;'>Please wait for the experimenter to continue.</p>"+
    "<p style='color:white;'><i>You may now close the expriment window at anytime.</i></p>",
  choices: jsPsych.NO_KEYS,
  // on_load: function() {
  //   alert(reward);
  // }
};

$.getScript("exp/main.js");