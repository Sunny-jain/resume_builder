
qualifications = [];
projects = [];

var qual = document.getElementById("qual");
qual.onclick = function(){
    if(isempty()){
        alert("Enter the required details to add a qualification");
    }
    else{
        addqual();
    }
}

var pro = document.getElementById("project");

pro.onclick = function(){
    if(isemp()){
        alert("Enter the required details to add a project");
    }
    else{
        addproject();
    }
}

function isempty(){
    var degre = document.getElementById("degree").value;
    var spec = document.getElementById("specialization").value;
    var sy = document.getElementById("startyear").value;
    var ey = document.getElementById("endyear").value;
    if(degre == "" || spec == "" || sy == "" || ey == ""){
        return true;
    }
    else{
        return false;
    }

}

function isemp(){
    var title = document.getElementById("title").value;
    var des = document.getElementById("description").value;
    var skill = document.getElementById("skill").value;
    if(title == "" || des == "" || skill == ""){
        return true;
    }
    else{
        return false;
    }

}

function addqual(){
    var qual = {
        degree : document.getElementById("degree").value,
        specialization : document.getElementById("specialization").value,
        startyear : document.getElementById("startyear").value,
        endyear : document.getElementById("endyear").value
    };

    qualifications.push(qual);

    var q = document.getElementById("qualification");
    q.innerHTML = "";
    for(var i = 0; i < qualifications.length; i++){
        var s = document.createElement("div");
        s.classList.add("card");
        s.setAttribute("id", qualifications[i].degree)

        var l = document.createElement("div");
        l.classList.add("card-body");

        l.innerHTML = `${qualifications[i].degree} in ${qualifications[i].specialization} from ${qualifications[i].startyear} to ${qualifications[i].endyear} <span class="badge badge-muted text-primary" onclick = editqual(${qualifications[i].degree})>edit</span><span class="badge badge-muted text-primary" onclick = deletequal(${qualifications[i].degree})>delete</span>`

        s.appendChild(l);

        q.appendChild(s);
    }

    document.getElementById("degree").value = "";
    document.getElementById("specialization").value = "";
    document.getElementById("startyear").value = "";
    document.getElementById("endyear").value = "";
}

function deletequal(target){
    for(var i=0;i<qualifications.length;i++){
        if(target.id == qualifications[i].degree){
            qualifications.splice(i,1);
        }
    }


    var q = document.getElementById("qualification");
    q.innerHTML = "";
    for(var i = 0; i < qualifications.length; i++){
        var s = document.createElement("div");
        s.classList.add("card");
        s.setAttribute("id", qualifications[i].degree)

        var l = document.createElement("div");
        l.classList.add("card-body");

        l.innerHTML = `${qualifications[i].degree} in ${qualifications[i].specialization} from ${qualifications[i].startyear} to ${qualifications[i].endyear} <span class="badge badge-muted text-primary" onclick = editqual(${qualifications[i].degree})>edit</span><span class="badge badge-muted text-primary" onclick = deletequal(${qualifications[i].degree})>delete</span>`

        s.appendChild(l);

        q.appendChild(s);
    }
}

function editqual(target){
    var i;
    for(i=0;i<qualifications.length;i++){
        if(target.id == qualifications[i].degree){
            break;
        }
    }

    document.getElementById("degree").value = qualifications[i].degree;
    document.getElementById("specialization").value = qualifications[i].specialization;
    document.getElementById("startyear").value = qualifications[i].startyear;
    document.getElementById("endyear").value = qualifications[i].endyear;
    
    var z = document.getElementById("qual");
    z.onclick = function(){
        if(isempty()){
            alert("Enter the required details to add a qualification");
        }
        else{

            var i;
            for(i=0;i<qualifications.length;i++){
                if(target.id == qualifications[i].degree){
                    break;
                }
            }
            qualifications[i].degree = document.getElementById("degree").value;
            qualifications[i].specialization = document.getElementById("specialization").value;
            qualifications[i].startyear = document.getElementById("startyear").value;
            qualifications[i].endyear = document.getElementById("endyear").value;

            var q = document.getElementById("qualification");
            q.innerHTML = "";
            for(var i = 0; i < qualifications.length; i++){
                var s = document.createElement("div");
                s.classList.add("card");
                s.setAttribute("id", qualifications[i].degree)
    
                var l = document.createElement("div");
                l.classList.add("card-body");
    
                l.innerHTML = `${qualifications[i].degree} in ${qualifications[i].specialization} from ${qualifications[i].startyear} to ${qualifications[i].endyear} <span class="badge badge-muted text-primary" onclick = editqual(${qualifications[i].degree})>edit</span><span class="badge badge-muted text-primary" onclick = deletequal(${qualifications[i].degree})>delete</span>`
    
                s.appendChild(l);
    
                q.appendChild(s);
            }
    
            document.getElementById("degree").value = "";
            document.getElementById("specialization").value = "";
            document.getElementById("startyear").value = "";
            document.getElementById("endyear").value = "";
        }
    }
}

function addproject(){
    var pro = {
        title : document.getElementById("title").value,
        description : document.getElementById("description").value,
        skill : document.getElementById("skill").value,
    };

    projects.push(pro);

    var q = document.getElementById("projects-list");
    q.innerHTML = "";
    for(var i = 0; i < projects.length; i++){
        var s = document.createElement("div");
        s.classList.add("card");
        s.setAttribute("id", projects[i].title)

        var l = document.createElement("div");
        l.classList.add("card-body");

        l.innerHTML = `${projects[i].title} : ${projects[i].description} ' ${projects[i].skill} ' <span class="badge badge-muted text-primary" onclick = editproject(${projects[i].title})>edit</span><span class="badge badge-muted text-primary" onclick = deleteproject(${projects[i].title})>delete</span>`

        s.appendChild(l);

        q.appendChild(s);
    }

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("skill").value = "";
}

function deleteproject(target){
    for(var i=0;i<projects.length;i++){
        if(target.id == projects[i].title){
            projects.splice(i,1);
        }
    }


    var q = document.getElementById("projects-list");
    q.innerHTML = "";
    for(var i = 0; i < projects.length; i++){
        var s = document.createElement("div");
        s.classList.add("card");
        s.setAttribute("id", projects[i].title)

        var l = document.createElement("div");
        l.classList.add("card-body");

        l.innerHTML = `${projects[i].title} : ${projects[i].description} ' ${projects[i].skill} ' <span class="badge badge-muted text-primary" onclick = editproject(${projects[i].title})>edit</span><span class="badge badge-muted text-primary" onclick = deleteproject(${projects[i].title})>delete</span>`

        s.appendChild(l);

        q.appendChild(s);
    }
}

function editproject(target){
    var i;
    for(i=0;i<projects.length;i++){
        if(target.id == projects[i].title){
            break;
        }
    }

    document.getElementById("title").value = projects[i].title;
    document.getElementById("description").value = projects[i].description;
    document.getElementById("skill").value = projects[i].skill;
    
    var z = document.getElementById("project");
    z.onclick = function(){
        if(isemp()){
            alert("Enter the required details to add a qualification");
        }
        else{

                var i;
                for(i=0;i<projects.length;i++){
                    if(target.id == projects[i].title){
                        break;
                    }
                }
                projects[i].title = document.getElementById("title").value;
                projects[i].description = document.getElementById("description").value;
                projects[i].skill = document.getElementById("skill").value;

                    var q = document.getElementById("projects-list");
                q.innerHTML = "";
                for(var i = 0; i < projects.length; i++){
                var s = document.createElement("div");
                s.classList.add("card");
                s.setAttribute("id", projects[i].title)

                var l = document.createElement("div");
                l.classList.add("card-body");

                l.innerHTML = `${projects[i].title} : ${projects[i].description} ' ${projects[i].skill} ' <span class="badge badge-muted text-primary" onclick = editproject(${projects[i].title})>edit</span><span class="badge badge-muted text-primary" onclick = deleteproject(${projects[i].title})>delete</span>`

                s.appendChild(l);

                q.appendChild(s);
            }

            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
            document.getElementById("skill").value = "";
        }
    }
}

