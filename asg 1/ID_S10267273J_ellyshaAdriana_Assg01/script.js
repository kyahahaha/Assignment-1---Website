/* js for purchase */
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('confirm');
  
    button.addEventListener('click', function () {
      alert("'Stille Nacht, Rosen Nacht' ticket purchase made");
    });
  });
  
/* form */
  function handleSelection(event) {
    const ticketno = event.target.value;
    console.log('Total tickets:', selectedpax);
  }

  document.getElementById('dates').addEventListener('change', handleSelection);

  function handleSelection(event) {
    const ticketno = event.target.value;
    console.log('Days:', selectedpax);
  }

  document.getElementById('ticketno').addEventListener('change', handleSelection);