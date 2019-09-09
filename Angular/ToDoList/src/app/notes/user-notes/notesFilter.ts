import { PipeTransform, Pipe } from '@angular/core';
import { NotesModel } from 'src/app/servicesNmodels/notes-model';
@Pipe({
    name:'notesFilter'
})

export class notesFilter implements PipeTransform {
    transform(myNotes:NotesModel[],searchTerm:string):NotesModel[]{
        if(!myNotes || !searchTerm){
            return myNotes;
        }
        return myNotes.filter(myNote => myNote.Tittle.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}
