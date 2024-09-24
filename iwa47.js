d3.csv('https://github.com/blmndlh/iwa47/blob/main/iwa47.csv', function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]});
}

var data = [{
      type: "treemap",
      ids: unpack(rows, 'ids'),
      labels: unpack(rows, 'labels'),
      parents: unpack(rows, 'parents')
    }];

Plotly.newPlot('myDiv', data);
})