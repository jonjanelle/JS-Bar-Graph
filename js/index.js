
function drawBars()
{
  var g = document.getElementById('graph1');
  var w = g.clientWidth; //doesn't include borders
  var h = g.clientHeight;
  while (g.hasChildNodes()) {
    g.removeChild(g.lastChild);
  }

  var table = document.getElementById("count-table");
  var nBars = table.rows.length;
  var barWidth = Math.min(60, (w-5*(nBars+1))/nBars);
  var maxCount = getTableMax(table, 1);

  for (var i = 1 ; i < nBars; i++){ //Row 0 is headers
    var bar = document.createElement("div");
    bar.style.width=barWidth+'px';
    var currentHeight = Math.round(0.95*h*parseFloat(table.rows[i].cells[1].innerHTML)/maxCount);
    bar.style.height=currentHeight+'px';
    bar.style.position='absolute';
    bar.style.left=5+(barWidth+5)*(i-1)+'px';
    bar.style.bottom='0';
    bar.style.backgroundColor='blue';
    bar.style.color='white';
    bar.style.fontWeight="bold";
    bar.style.textAlign="center";
    bar.innerHTML = table.rows[i].cells[1].innerHTML;
    g.appendChild(bar);
  }
}

function getTableMax(table, colIndex) {
  if (table.rows.length <= 1) {
    return null;
  }
  var max = table.rows[1].cells[colIndex].innerHTML;
  for (var i = 2; i < table.rows.length; i++){
    max = Math.max(max,table.rows[i].cells[colIndex].innerHTML);
  }
  return max;
}