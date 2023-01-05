import { Component } from '@angular/core';
import { Breadcrumb } from "../../../types/breadcrumb.type";
import { BreadcrumbsService } from "../../../services/breadcrumbs.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  public breadcrumbs$: Observable<Breadcrumb[]> = this.breadcrumbsService.breadcrumbs$;

  constructor(private breadcrumbsService: BreadcrumbsService) {}
}
