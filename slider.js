var sliderFactory = {
  createNewSlider: function() {
  var newSlider = {
    imagesUrls: [],
    currentImgIndex: 0,
    showPrevBtn: null,
    showNextBtn: null,
    slideImg: null, 
  
    start: function (elId) {
      var that = this;
      var elSelector = "#" + elId;
      var el = document.querySelector(elSelector);
  
      this.showPrevBtn = el.querySelector(".show-prev-btn");
      this.showNextBtn = el.querySelector(".show-next-btn");
      this.slideImg = el.querySelector(".slide-img");
  
      // subscribe to events
      this.showPrevBtn.addEventListener("click", function (event) {
        that.onShowPrevBtnClick(event);
      });
  
      // this.onShowPrevBtnClick);
  
      this.showNextBtn.addEventListener("click", function (event) {
        that.onShowNextBtnClick();
      });
  
      this.imagesUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeP3U1zvobb3LOrUtUjrl2Vme0uhwhuJxavYj2v7_BTgWo4FIJ6cgtKB6n0GNxNZ_8gc&usqp=CAU"
      );
      this.imagesUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-9Rm4V-8pG5pm0pXsfz0hHLtFCT0rIGeGwlIcIv7iSl-Sq_j2xJmKC4Vcd6QS9zyO-w&usqp=CAU"
      );
      this.imagesUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBKFdRD2NmeqftlUUg-aECflLGCEiTWAVrQ&usqp=CAU"
      );
      this.imagesUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2maPX58Tw6G4ldfyzdu_f6n9dKw7vjoJ0Lw&usqp=CAU"
      );
      this.imagesUrls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ncZthPmA7ozrdQUGaKVRzUP9qaafiA9_kw&usqp=CAU"
      );
  
      this.slideImg.src = this.imagesUrls[this.currentImgIndex];
      this.showPrevBtn.disabled = true;
    },
  
    onShowPrevBtnClick: function (event) {
      this.currentImgIndex--;
      this.slideImg.src = this.imagesUrls[this.currentImgIndex];
      this.showNextBtn.disabled = false;
  
      //disables next btn if need
      if (this.currentImgIndex === 0) {
        this.showPrevBtn.disabled = true;
      }
    },
  
    onShowNextBtnClick: function (event) {
      this.currentImgIndex++;
      this.slideImg.src = this.imagesUrls[this.currentImgIndex];
      this.showPrevBtn.disabled = false;
  
      //disables next btn if need
      if (this.currentImgIndex === this.imagesUrls.length - 1) {
        this.showNextBtn.disabled = true;
      }
    },
  };
  
  return newSlider;
}
}

