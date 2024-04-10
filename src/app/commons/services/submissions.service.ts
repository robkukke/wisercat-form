import { Injectable, signal } from '@angular/core';
import { ISubmission } from "../interfaces/submission";

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  submissions = signal<ISubmission[]>([])

  addToSubmissions(submission: ISubmission): void {
    this.submissions.update(submissions => ([...submissions, submission]));
  }
}
