import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trial-one-ian';
  username: string | undefined;

  intro='Am so excited to do my first angular app roject,';
  courses ='Angualr';
  image ="url of image";
  new="Ian"
  name="TREAVOUR JOHNS"
  name2="POP SMOKE"


  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  
  bufferValue = 75;

  /*---*/
  value = "Clear me";

  /*-table--*/
  headers=["ID","NAME","AGE","GENDER","COUNTRY"];
/*-table--*/

  rows:any=[
    {
      "ID":"1",
      "NAME": "Flora",
      "AGE":"290",
      "GENDER":"FEMALE",
      "COUNTRY":"Hungary"


    },

    {
      "ID":"2",
      "NAME": "Frodo",
      "AGE":"290",
      "GENDER":"FEMALE",
      "COUNTRY":"Hungary"


    },
    {
      "ID":"3",
      "NAME": "kato",
      "AGE":"290",
      "GENDER":"FEMALE",
      "COUNTRY":"Hungary"


    },
    {
      "ID":"4",
      "NAME": "ian",
      "AGE":"290",
      "GENDER":"FEMALE",
      "COUNTRY":"Hungary"


    },
    {
      "ID":"51",
      "NAME": "Floriana",
      "AGE":"290",
      "GENDER":"FEMALE",
      "COUNTRY":"Hungary"


    },
    {
      "ID":"6",
      "NAME": "Florak",
      "AGE":"290",
      "GENDER":"FEMALE",
      "COUNTRY":"Hungary"


    },
  ]
  goBack():void{}


constructor(){}
ngOnIt(){}

urls = []

onselectFiles(e:any){
  if(e.target.files){
    for (var i = 0 ;i <File.length; i++){

      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[i]);
      reader.onload=(e :any) => 
      {
      
      this.urls .push ;(e.target.result);
    

      }
      
    }
  }
}

/*-check--*/
task: Task = {
  name: 'Indeterminate',
  completed: false,
  color: 'primary',
  subtasks: [
    {name: 'Primary', completed: false, color: 'primary'},
    {name: 'Accent', completed: false, color: 'accent'},
    {name: 'Warn', completed: false, color: 'warn'}
  ]
};

allComplete: boolean = false;

updateAllComplete() {
  this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
}

someComplete(): boolean {
  if (this.task.subtasks == null) {
    return false;
  }
  return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
}

setAll(completed: boolean) {
  this.allComplete = completed;
  if (this.task.subtasks == null) {
    return;
  }
  this.task.subtasks.forEach(t => t.completed = completed);
}
/*--*/
checked = false;
indeterminate = false;
labelPosition: 'before' | 'after' = 'after';
disabled = false;


/*-list-*/
typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
/*--list 2*/
Fruits: string[] = ['Banana', 'Mango', 'Orange', 'Citrom', 'Melon'];

}





