


var grab = document.getElementsByTagName('cards');

test.backlogTasks.forEach(function (task) {
    var p = document.createElement('p');
    p.append(task.name);
    grab[0].append(p);
})

test.inProgressTasks.forEach(function (task) {
    var p = document.createElement('p');
    p.append(task.name);
    grab[1].append(p);
})

test.completeTasks.forEach(function (task) {
    var p = document.createElement('p');
    p.append(task.name);
    grab[2].append(p);
})

// grab[index].innerHTML =