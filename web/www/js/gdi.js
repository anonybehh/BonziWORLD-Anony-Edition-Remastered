var gdiEnabled = false;
function opengdi(gdi) {
  // WAAAAAAA MY PC FUCKED (while bwibe got infecte- ok why am i saying this ew idealgay groun- no)
  // for GOD sake please open some programs. "What program?"
  // FUN FACT: it ran faster in bonzi.gay if i'm correct.
  if (gdi == "dementia") {
    //Run the gdi effect and play a bytebeat
    gdiEnabled = true;
    var firstpayload = new Audio("./sfx/gdi/dementia/html5bytebeat (3).wav");
    firstpayload.play();
    var gdieffect1 = setInterval(function () {
      // Rotate the screen
      document.querySelector("#content").style.transform = `rotate(${Math.floor(
        Math.random() * 10000
      )}deg)`;
    }, 50);
    setTimeout(function () {
      // Clear the gdi
      clearInterval(gdieffect1);
      document.querySelector("#content").style.transform = `rotate(0deg)`;
      var secondpayload = new Audio("./sfx/gdi/dementia/html5bytebeat (9).wav");
      secondpayload.play();
      var gdieffect2 = setInterval(function () {
        document.querySelector(
          "#content"
        ).style.transform = `skewY(${Math.floor(Math.random() * 10000)}deg) 
        skewX(${Math.floor(Math.random() * 10000)}deg)`;
      }, 50);
      setTimeout(function () {
        // Clear the gdi
        clearInterval(gdieffect2);
        document.querySelector(
          "#content"
        ).style.transform = `skewY(0deg) skewX(0deg)`;
        var thirdpayload = new Audio("./sfx/gdi/dementia/html5bytebeat(1).wav");
        thirdpayload.play();
        // Actually invert the content. IDK why the context menu was unharmed like the windows vista or 7 start orb when you launch a GDI malware.
        // it happens in effects
        // prob the first GDI malware using JS?
        // kinda
        var inverteffect = setInterval(function () {
          document.querySelector("#content").style.webkitFilter = `invert(1)`;
          setTimeout(function () {
            document.querySelector("#content").style.webkitFilter = `invert(0)`;
          }, 50);
        }, 60);
        var mirroreffect = setInterval(function () {
          document.querySelector("#content").style.transform = `scale(-1, 1)`;
          setTimeout(function () {
            document.querySelector("#content").style.transform = `scale(1, 1)`;
          }, 50);
        }, 60);
        var shakeScreen = setInterval(function () {
          document.querySelector(
            "#content"
          ).style.transform = `translate(${Math.floor(
            Math.random() * 100
          )}px, ${Math.floor(Math.random() * 100)}px)`;
        }, 50);
        setTimeout(function () {
          var payload4 = new Audio("./sfx/gdi/dementia/html5bytebeat(6).wav");
          payload4.play(),
            clearInterval(shakeScreen),
            clearInterval(mirroreffect),
            clearInterval(inverteffect);
          document.querySelector(
            "#content"
          ).style.transform = `translate(0px, 0px)`;
          // ico.exe???
          document.querySelector("#content").style.transform = `scale(1, 1)`;
          document.querySelector("#content").style.webkitFilter = `invert(0)`;
          let scale_y = 1;
          var scaley = setInterval(function () {
            scale_y++;
            document.querySelector(
              "#content"
            ).style.transform = `scale(1, ${scale_y})`;
          }, 50);
          setTimeout(function () {
            var payload5 = new Audio("./sfx/gdi/dementia/html5bytebeat(3).wav");
            payload5.play(), clearInterval(scaley);
            document.querySelector("#content").style.transform = `scale(1, 1)`;
            // do teh EVERYTHING
            var inverteffect2 = setInterval(function () {
              document.querySelector(
                "#content"
              ).style.webkitFilter = `invert(1)`;
              setTimeout(function () {
                document.querySelector(
                  "#content"
                ).style.webkitFilter = `invert(0)`;
              }, 50);
            }, 60);
            var mirroreffect2 = setInterval(function () {
              document.querySelector(
                "#content"
              ).style.transform = `scale(-1, 1)`;
              setTimeout(function () {
                document.querySelector(
                  "#content"
                ).style.transform = `scale(1, 1)`;
              }, 50);
            }, 60);
            var shakeScreen2 = setInterval(function () {
              document.querySelector(
                "#content"
              ).style.transform = `translate(${Math.floor(
                Math.random() * 100
              )}px, ${Math.floor(Math.random() * 100)}px)`;
            }, 50);
            let scale_y2 = 1;
            var scaley2 = setInterval(function () {
              scale_y2++;
              document.querySelector(
                "#content"
              ).style.transform = `scale(1, ${scale_y2})`;
            }, 50);
            var gdieffect8 = setInterval(function () {
              // Rotate the screen
              document.querySelector(
                "#content"
              ).style.transform = `rotate(${Math.floor(
                Math.random() * 10000
              )}deg)`;
            }, 50);
            var gdieffect21 = setInterval(function () {
              document.querySelector(
                "#content"
              ).style.transform = `skewY(${Math.floor(
                Math.random() * 10000
              )}deg) 
            skewX(${Math.floor(Math.random() * 10000)}deg)`;
            }, 50);
            setTimeout(function () {
              clearInterval(gdieffect8),
                clearInterval(gdieffect21),
                clearInterval(scaley2),
                clearInterval(inverteffect2),
                clearInterval(shakeScreen2),
                clearInterval(inverteffect2),
                clearInterval(mirroreffect2);
              var payload6 = new Audio(
                "./sfx/gdi/dementia/html5bytebeat(2).wav"
              );
              payload6.play();
              document.querySelector(
                "#content"
              ).style.transform = `translate(0px, 0px)`;
              document.querySelector(
                "#content"
              ).style.transform = `scale(1, 1)`;
              document.querySelector(
                "#content"
              ).style.webkitFilter = `invert(0)`;
              document.querySelector("#content").style.transform = `skewY(0deg) 
            skewX(0deg)`;
              let x_and_y = 0;
              //scale the screen using let var = 0 and var++
              var scalethescreen = setInterval(function () {
                x_and_y++;
                document.querySelector(
                  "#content"
                ).style.transform = `scale(${x_and_y})`;
              }, 50);
              setTimeout(function () {
                var payload7 = new Audio(
                  "./sfx/gdi/dementia/html5bytebeat (12).wav"
                );
                payload7.play();
                clearInterval(scalethescreen);
                document.querySelector(
                  "#content"
                ).style.transform = `scale(1, 1)`;
                let gdi_x = 0;
                var scale_x = setInterval(function () {
                  gdi_x++;
                  document.querySelector(
                    "#content"
                  ).style.transform = `scale(${gdi_x}, 1)`;
                }, 50);
                setTimeout(function () {
                  clearInterval(scale_x);
                  document.querySelector(
                    "#content"
                  ).style.transform = `scale(1, 1)`;
                  // bsod the bwibe
                  bsod("FUCKED_BY_DEMENTIA");
                }, 30000);
              }, 30000);
            }, 30000);
          }, 30000);
        }, 30000);
      }, 30000);
    }, 30000);
  }
}