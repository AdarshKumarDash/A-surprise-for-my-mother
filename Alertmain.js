function Alertbx() {
    swal("I LOVE YOU MAMA!", "", "https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart.jpg?w=636&h=358",{
  buttons: {
    cancel: "NEVER",
    good: {
      text: "SAME TO YOU!",
    },
  },
})
.then((value) => {
  switch (value) {
    case "good":
      swal("THANK YOU MAMA!", "", URL="https://media.tenor.com/images/f59af31992aef79f10e6968ca879a92a/tenor.gif");
          break;
 
    default:
      swal("I AM VERY SAD", "", URL="https://i.pinimg.com/originals/c7/eb/5b/c7eb5bbae52025b4d2ad9b8224022bd4.gif");
  }
});

}