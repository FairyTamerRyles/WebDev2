function initializeData(req, res, next) {
    if(req.session.toDoArray === undefined) {
        req.session.toDoArray = [ ];
    }
    next();
}

function getListRedirect(req, res) {
    res.redirect(303, '/list');
}

function getList(req, res){
    data = { toDoItems: req.session.toDoArray };
    res.render('ToDoList.hb', data);
}

function getStyles(req, res){
    
}

function postAdd(req, res){
    const newItem = req.body.newItem;
    req.session.toDoArray.push({
        isChecked: 0,
        itemText: newItem
    });
    req.session.save(() => {
        res.redirect(303, '/list')
    })
}

function postSave(req, res){
    let indexes = [];
    for(const item in req.body){
        indexes.push(item.charAt(4));
    }
    for(let i = 0; i < req.session.toDoArray.length; i++) {
        if(indexes.includes(`${i}`)){
            req.session.toDoArray[i].isChecked = "done";
        } else {
            req.session.toDoArray[i].isChecked = 0;
        }
    }
    req.session.save(() => {
        res.redirect(303, '/list');
    });
}

function postRemove(req, res){
    let indexes = [];
    for(const item in req.body){
        indexes.push(item.charAt(4));
    }
    for(let i = 0; i < req.session.toDoArray.length; i++) {
        if(indexes.includes(`${i}`)){
            req.session.toDoArray.splice(i, 1);
        } else {
            req.session.toDoArray[i].isChecked = 0;
        }
    }
    req.session.save(() => {
        res.redirect(303, '/list');
    });
}

module.exports = { getListRedirect, getList, getStyles, postAdd, postSave, postRemove, initializeData };