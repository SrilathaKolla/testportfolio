import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {
  skills: any[] = [
    { name: 'Java', rating: 5 },
    { name: 'JavaScript', rating: 4 },
    { name: 'Python', rating: 4 },
    { name: 'SQL', rating: 4 },
    { name: 'CSS', rating: 4 },
    { name: 'HTML', rating: 4 },
    { name: 'Angular', rating: 3 },
    { name: 'Spring Boot', rating: 4 },
    { name: 'Java', rating: 3 },
    { name: 'Shell', rating: 3 },
    { name: 'MySQL', rating: 3 },
  ];
  ngOnInit(): void {
  }
}
