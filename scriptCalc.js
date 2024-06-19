

let button = document.querySelector('button');
                        let screen = document.querySelector('.screen');
                       
                     

                        function seven(){
                            screen.value += '7';
                         }

                         function eight(){
                            screen.value += '8';
                         };
                         function nine(){
                            screen.value += '9';
                         };
                         function plus(){
                            screen.value += '+';
                         };
                         function four(){
                            screen.value += '4';
                         };
                         function five(){
                            screen.value += '5';
                         };
                         function six(){
                            screen.value += '6';
                         };
                         function minus(){
                            screen.value += '-';
                         };
                         function one(){
                            screen.value += 1;
                         };
                         function two(){
                            screen.value += '2';
                         };
                         function three(){
                            screen.value += '3';
                         };
                         function fi(){
                            screen.value += '*';
                         };
                         function sefr(){
                            screen.value += '0';
                         };
                         function point(){
                            screen.value += '.';
                         };
                         function kisma(){
                            screen.value += '/';
                         };

                         function is() {
                            screen.value = eval(screen.value);
                         };

                         function clEEar() {
                            screen.value = screen.value.toString().slice(0,-1);
                         };

                        function clErAll() {
                            screen.value= '';
                        };

                        
                        function changeColor() {
                           let bUTONE = document.getElementById('changement');
                           let box1 = document.querySelector('.Calculator');
                           let box2 = document.querySelector('.buttoins');
                           let box3 = document.querySelector('button');
                           let btns = document.querySelector('.btn');

                           if (btns.innerHTML === 'vert') {
                              bUTONE.innerHTML = 'blue', btns.style.background = '#000016', box1.style.background = '#041c6d', box3.style.background = '#173F5F', box2.style.background = '#85a0f8';
                                 }
                                 
                                 else if (bUTONE.innerHTML === 'blue') {
                                    bUTONE.innerHTML = 'rose'  , btns.style.background = '#041c6d', box1.style.background = '#E8175D', box3.style.background = '#C72C41', box2.style.background = '#FFAAA6';
                                 }
                                 else {
                                    bUTONE.innerHTML = 'vert'  , btns.style.background = '#073B3A', box1.style.background = '#428C8B', box3.style.background = '#0A5C36', box2.style.background = '#9DE0AD';
                                 }
                                }
                                 