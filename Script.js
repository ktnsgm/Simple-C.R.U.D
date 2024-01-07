let app = new function() {
    this.elm = document.getElementById('tasks');
    this.tasks = []

    this.FetchAll = function() {
        let data = '';
        if (this.tasks.length > 0) {
            for (i=0; i < this.tasks.length; i++) {
                data+='<tr>';

                data+='<td>' + (i+1) + '. ' + this.tasks[i] + '</td>';
                data+='<td> <button onclick="app.Edit('+i+');" class="btn btn-warning"> Edit </button> </td>'
                data+='<td> <button onclick="app.Delete('+i+');" class="btn btn-danger"> Delete </button> </td>'

                data+='</tr>'

            }
        }
        this.Count(this.tasks.length);
        return this.elm.innerHTML = data

    };

    this.Add = function() {
        elm = document.getElementById('add-to-do')
        let task = elm.value;
        if (task) {
            this.tasks.push(task.trim());
            elm.value = '';
            this.FetchAll();
        }

    };

    this.Edit = function(item) {
        elm = document.getElementById('edit-to-do');
        elm.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function() {
            let task = elm.value;
            if (task) {
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                closeInput();
            }
        }

    };

    

    this.Count = function(data) {
        let elm = document.getElementById('counter');
        let name = 'Tasks';
        if (data) {
            if (data === 1) {
                name = 'Task';
            }
            elm.innerHTML = data + '. ' + name;
        } else {
            elm.innerHTML = "No " + name;
        }
    };

    this.Delete = (item) => {

        this.tasks.splice(item, 1)
        this.FetchAll();

    };
};

app.FetchAll();

function closeInput() {
    document.getElementById('edit-box').style.display = 'none';
};