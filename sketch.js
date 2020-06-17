    //BUTTON PICTURES
    let Implant
    let IUD
    let MaleS
    let FemaleS
    let Injectable
    let Pill
    let Patch
    let Ring
    let Diaphragm
    let MaleCondom
    let FemaleCondom
    let Withdraw
    let Sponge
    let FABM
    let Spermicide
    let CDC
    let Disclaimer
    
    let count = 0;
    let total = 1;
    let math = []; // declared above the setup function
    
    function preload() {
      Implant = loadImage('SOURCE (2).PNG');
      IUD = loadImage('SOURCE (3).PNG');
      MaleS = loadImage('SOURCE (4).PNG');
      FemaleS = loadImage('SOURCE (5).PNG');
      Injectable = loadImage('SOURCE (6).PNG');
      Pill = loadImage('SOURCE (7).PNG');
      Patch = loadImage('SOURCE (8).PNG');
      Ring = loadImage('SOURCE (9).PNG');
      Diaphragm = loadImage('SOURCE (10).PNG');
      MaleCondom = loadImage('SOURCE (11).PNG');
      FemaleCondom = loadImage('SOURCE (12).PNG');
      Withdraw = loadImage('SOURCE (13).PNG');
      Sponge = loadImage('SOURCE (14).PNG');
      FABM = loadImage('SOURCE (15).PNG');
      Spermicide = loadImage('SOURCE (16).PNG');
      CDC = loadImage('CDC.PNG');
      Disclaimer = loadImage('discalimer.PNG');

    }

    function setup() {
      createCanvas(windowWidth, windowHeight);
      
      ImplantLock = false;
      IUDLock = false;
      MaleSLock = false;
      FemaleSLock = false;
      InjectableLock = false;
      PillLock = false;
      PatchLock = false;
      RingLock = false;
      DiaphragmLock = false;
      MaleCondomLock = false;
      FemaleCondomLock = false;
      WithdrawLock = false;
      SpongeLock = false;
      FABMLock = false;
      SpermicideLock = false;
    }

    function draw() {
      background(0);
      strokeWeight(5);
      stroke(255);
      unselected = color('grey');
      selected = color('green');
      unselected.setAlpha(0);
      selected.setAlpha(50);
      
      
      let h = windowHeight;
      let w = windowWidth;
      let w1 = w / 2.5;
      let w2 = w / 10;
      let h1 = h / 7.5;
      let h2 = h / 13;
     
      strokeWeight(0);
      textSize(w / 20)

      image(Diaphragm, w2 * .001, h1 * 5.6, w / 10.5, h / 8);
      image(MaleCondom, w2 * 1.001, h1 * 5.6, w / 10.5, h / 8);
      image(FemaleCondom, w2 * 2.001, h1 * 5.6, w / 10.5, h / 8);
      image(Injectable, w2 * .003, h1 * 4.6, w / 10.5, h / 8);
      image(Pill, w2 * 1.003, h1 * 4.6, w / 10.5, h / 8);
      image(Patch, w2 * 2.003, h1 * 4.6, w / 10.5, h / 8);
      image(Implant, w2 * .003, h1 * 3.6, w / 10.5, h / 8);
      image(IUD, w2 * 1.03, h1 * 3.6, w / 10.5, h / 8);
      image(MaleS, w2 * 2.03, h1 * 3.6, w / 10.5, h / 8);
      text('All Clear', w2 * 0.2, h1 * 3.25);
      image(FemaleS, w2 * 3.03, h1 * 3.6, w / 10.5, h / 8);
      image(Ring, w2 * 3.003, h1 * 4.6, w / 10.5, h / 8);
      image(Withdraw, w2 * 3.001, h1 * 5.6, w / 10.5, h / 8);
      image(Sponge, w2 * .001, h1 * 6.6, w / 10.5, h / 8);
      image(FABM, w2 * 1.001, h1 * 6.6, w / 10.5, h / 8);
      image(Spermicide, w2 * 2.001, h1 * 6.6, w / 10.5, h / 8);
      
      // Sponge
      if (mouseIsPressed && (mouseX > 0 && mouseX < w2 && mouseY > h1 * 6.6 && mouseY < h) && SpongeLock == false) {
        SpongeLock = true;
        count++;
        total = (total * .24)/count;
        fill(selected);
      } else if(SpongeLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(0, h1 * 6.6, w2, h);

       // FABM
      if (mouseIsPressed && (mouseX > w2 && mouseX < w2 * 2 && mouseY > h1 * 6.6 && mouseY < h) && FABMLock == false) {
        FABMLock = true;
        count++;
        total = (total * .24)/count;
        fill(selected);
      } else if(FABMLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2, h1 * 6.6, w2, h);
      
      // Spermicide
      if (mouseIsPressed && (mouseX > w2 * 2 && mouseX < w2*3 && mouseY > h1 * 6.6 && mouseY < h) && SpermicideLock == false) {
        SpermicideLock = true;
        count++;
        total = (total * .28)/count;
        fill(selected);
      } else if(SpermicideLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2 * 2, h1 * 6.6, w2, h);

      // Diaphragm
      if (mouseIsPressed && (mouseX > 0 && mouseX < w2 && mouseY > h1 * 5.6 && mouseY < h1 * 6.6) && DiaphragmLock == false) {
        DiaphragmLock = true;
        count++;
        total = (total * .12)/count;
        fill(selected);
      } else if(DiaphragmLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(0, h1 * 5.6, w2, h1);

      // Male Condom
      if (mouseIsPressed && (mouseX > w2 && mouseX < w2 * 2 && mouseY > h1 * 5.6 && mouseY < h1 * 6.6) && MaleCondomLock == false) {
        MaleCondomLock = true;
        count++;
        total = (total * .18)/count;
        fill(selected);
      } else if(MaleCondomLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2, h1 * 5.6, w2, h1);

      // Female Condom
      if (mouseIsPressed && (mouseX > w2 * 2 && mouseX < w2 * 3 && mouseY > h1 * 5.6 && mouseY < h1 * 6.6) && FemaleCondomLock == false) {
        FemaleCondomLock = true;
        count++;
        total = (total * .21)/count;
        fill(selected);
      } else if(FemaleCondomLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2 * 2, h1 * 5.6, w2, h1);

      // Withdrawal
      if (mouseIsPressed && (mouseX > w2 * 3 && mouseX < w2 * 4 && mouseY > h1 * 5.6 && mouseY < h1 * 6.6) && WithdrawLock == false) {
        WithdrawLock = true;
        count++;
        total = (total * .22)/count;
        fill(selected);
      } else if(WithdrawLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2 * 3, h1 * 5.6, w2, h1);

      // Injectable
      if (mouseIsPressed && (mouseX > 0 && mouseX < w2 && mouseY > h1 * 4.6 && mouseY < h1 * 5.6) && InjectableLock == false) {
        InjectableLock = true;
        count++;
        total = (total * .06)/count;
        fill(selected);
      } else if(InjectableLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(0, h1 * 4.6, w2, h1);

      // Pill
      if (mouseIsPressed && (mouseX > w2 && mouseX < w2 * 2 && mouseY > h1 * 4.6 && mouseY < h1 * 5.6) && PillLock == false) {
        PillLock = true;
        count++;
        total = (total * .09)/count;
        fill(selected);
      } else if(PillLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2, h1 * 4.6, w2, h1);

      // Patch
      if (mouseIsPressed && (mouseX > w2 * 2 && mouseX < w2 * 3 && mouseY > h1 * 4.6 && mouseY < h1 * 5.6) && PatchLock == false) {
        PatchLock = true;
        count++;
        total = (total * .09)/count;
        fill(selected);
      } else if(PatchLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2 * 2, h1 * 4.6, w2, h1);

      // Ring
      if (mouseIsPressed && (mouseX > w2 * 3 && mouseX < w2 * 4 && mouseY > h1 * 4.6 && mouseY < h1 * 5.6) && RingLock == false) {
        RingLock = true;
        count++;
        total = (total * .09)/count;
        fill(selected);
      } else if(RingLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2 * 3, h1 * 4.6, w2, h1);

      
      // Implant Button
      if (mouseIsPressed && (mouseX > 0 && mouseX < w2 && mouseY > h1 * 3.6 && mouseY < h1 * 4.6) && ImplantLock == false) {
        ImplantLock = true;
        count++;
        total = (total * .0005)/count;
        fill(selected);
      } else if(ImplantLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(0, h1 * 3.6, w2, h1);

      // IUD
      if (mouseIsPressed && (mouseX > w2 && mouseX < w2 * 2 && mouseY > h1 * 3.6 && mouseY < h1 * 4.6) && IUDLock == false) {
        IUDLock = true;
        count++;
        total = (total * .008)/count;
        fill(selected);
      } else if(IUDLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2, h1 * 3.6, w2, h1);

      // MaleS
      if (mouseIsPressed && (mouseX > w2 * 2 && mouseX < w2 * 3 && mouseY > h1 * 3.6 && mouseY < h1 * 4.6) && MaleSLock == false) {
        MaleSLock = true;
        count++;
        total = (total * .0015)/count;
        fill(selected);
      } else if(MaleSLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2 * 2, h1 * 3.6, w2, h1);

      // FemaleS
      if (mouseIsPressed && (mouseX > w2 * 3 && mouseX < w2 * 4 && mouseY > h1 * 3.6 && mouseY < h1 * 4.6) && FemaleSLock == false) {
        FemaleSLock = true;
        count++;
        total = (total * .005)/count;
        fill(selected);
      } else if(FemaleSLock == true){
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(w2 * 3, h1 * 3.6, w2, h1);

      // WHITE BUTTON All Clear
      if (mouseIsPressed && (mouseX > 0 && mouseX < w2 * 4 && mouseY > h1 * 2.6 && mouseY < h1 * 3.6)) {
        //userInput.clear();
        total = 1;
        count = 0;
        ImplantLock = false;
        IUDLock = false;
        MaleSLock = false;
        FemaleSLock = false;
        InjectableLock = false;
        PillLock = false;
        PatchLock = false;
        RingLock = false;
        DiaphragmLock = false;
        MaleCondomLock = false;
        FemaleCondomLock = false;
        WithdrawLock = false;
        SpongeLock = false;
        FABMLock = false;
        SpermicideLock = false;
        fill(selected);
      } else {
        fill(unselected);
      }
      strokeWeight(0);
      rect(0, h1 * 2.6, w2 * 4, h1);




      strokeWeight(5);
      stroke(255);

      line(0, h / 6, w, h / 6);

      //Selected Methods
      line(w1, h / 6 + 1, w1, h);
      //line(w/1.5, h/6 + 1, w/1.5, h);

      // TOTAL %
      line(w1, h / 1.25, w, h / 1.25);

      line(0, h1 * 2 + h2, w1, h1 * 2 + h2);
      line(0, h1 * 3 + h2, w1, h1 * 3 + h2);
      line(0, h1 * 4 + h2, w1, h1 * 4 + h2);
      line(0, h1 * 5 + h2, w1, h1 * 5 + h2);
      line(0, h1 * 6 + h2, w1, h1 * 6 + h2);
      line(w / 10, h1 * 3.6, w / 10, h);
      line(w2 * 2, (h1 * 3) + h2, w2 * 2, h);
      line(w2 * 3, h1 * 3.6, w / 3.3333, h);
      strokeWeight(0);

      fill(255);
      textSize(w / 30);
      textFont('Helvetica Bold')
      text('CONTRACEPTION CALCULATOR', w / 4, h / 10);

      textSize(w / 50)

      image(CDC, 0, h / 5.8, w / 2.53, h / 6.1);
      text('Sourced From:', w / 5.5, h / 5);
      image(Disclaimer, w/2.48, h/1.24, w/1.7, h/5);
      
      textSize(w/8);
      strokeWeight(2);
      let x = (total * 100).toFixed(3);
      text(x + '%', windowWidth/2.2, windowHeight/1.7);
      textSize(w/20);
      text('Chance of getting pregnant:', windowWidth/2.4, windowHeight/4);
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
