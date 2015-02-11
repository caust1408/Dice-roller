//var courses = [['Austgen','Grube','Heinzman','Herre','Hofer','Samano','Zekovic'],['Davis', 'Gainey', 'Klump', 'Postma']];

var courses = { "click1": ['1', '2', '3', '4', '5', '6']};

function chooseOne(course) {
  var thisClass = courses[course];

  var n = thisClass.length;
  var which = Math.floor(Math.random() * n);

  print('click1: ' + thisClass[which]);

