import { Component, inject } from '@angular/core';
import { SubmissionsService } from "../commons/services/submissions.service";
import { NgForOf, NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'wisercat-form-submissions-list',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './submissions-list.component.html',
  styleUrl: './submissions-list.component.scss'
})
export class SubmissionsListComponent {
  submissionsService = inject(SubmissionsService);
  submissions = this.submissionsService.submissions;
}
