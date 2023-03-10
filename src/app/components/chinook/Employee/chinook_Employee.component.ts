/*
 * Automatically generated by Magic
 */

// Angular specific components
import { throwError } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GridComponent } from '@app/base/grid.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

// Application specific components
import { EditChinook_EmployeeComponent } from './modals/edit.chinook_Employee.component';
import { HttpService } from 'src/app/services/http-service';
import { AuthService } from 'src/app/services/auth-service';

/**
 * "Datagrid" component for displaying instance of Employee
 * entities from your HTTP REST backend.
 */
@Component({
  selector: 'app-chinook_Employee',
  templateUrl: './chinook_Employee.component.html',
  styleUrls: ['./chinook_Employee.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', opacity: '0'})),
      state('expanded', style({height: '*', opacity: '1'})),
      transition('expanded <=> collapsed', animate('0.75s cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class Chinook_EmployeeComponent extends GridComponent implements OnInit {

  /**
   * Which columns we should display. Reorder to prioritize columns differently.
   * Notice! 'delete-instance' should always come last.
   */
  public displayedColumns: string[] = [
    'LastName',
    'FirstName',
    'ReportsTo.LastName',
    'Title',
    'Address',
    'City',
    'State',
    'Country',
    'PostalCode',
    'Phone',
    'Fax',
    'Email',
    'BirthDate',
    'HireDate',
    'delete-instance'
  ];

  /**
   * What element is currently expanded.
   */
  public expandedElement: any | null;


  // Need to view paginator as a child to update page index of it.
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // Form control declarations to bind up with reactive form elements.
  public LastName: FormControl;
  public FirstName: FormControl;
  public ReportsTo_LastName: FormControl;
  public Title: FormControl;
  public Address: FormControl;
  public City: FormControl;
  public State: FormControl;
  public Country: FormControl;
  public PostalCode: FormControl;
  public Phone: FormControl;
  public Fax: FormControl;
  public Email: FormControl;
  public BirthDate: FormControl;
  public HireDate: FormControl;
  public EmployeeId: FormControl;
  public ReportsTo: FormControl;


  /**
   * Creates an instance of your CRUD component.
   * 
   * @param httpService Needed to be able to invoke backend during CRUD operations
   * @param authService Needed to check if user has access to invoking CRUD operation
   * @param snackBar Needed to display errror and feedback
   * @param dialog Needed to show modal dialog as user edits or creates new entities
   * @param sanitizer Needed to be able to dynamically display iframes
   */
   constructor(
    public httpService: HttpService,
    public authService: AuthService,
    protected snackBar: MatSnackBar,
    protected dialog: MatDialog,
    protected sanitizer: DomSanitizer) {
      super(authService, snackBar, dialog, sanitizer);
  }

  /**
   * Overridde abstract method necessary to return the URL endpoint
   * for CRUD methods to base class.
   */
  public entityBaseUrl() {
    return 'magic/modules/chinook/Employee';
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually retrieve items from backend.
   */
  protected read(filter: any) {
    return this.httpService.chinook_Employee.read(filter);
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually retrieve count of items from backend.
   */
  protected count(filter: any) {
    return this.httpService.chinook_Employee.count(filter);
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually delete items in backend.
   */
  protected delete(ids: any) {
    return this.httpService.chinook_Employee.delete(ids);
  }

  /**
   * Implementation of abstract base class method, to reset paginator
   * of component.
   */
  protected resetPaginator() {
    this.paginator.pageIndex = 0;
    this.filter.offset = 0;
  }

  /**
   * OnInit implementation. Retrieves initial data (unfiltered),
   * and instantiates our FormControls.
   */
  public ngOnInit() {

    // Retrieves data from our backend, unfiltered, and binds our mat-table accordingly.
    this.getData();

    /*
     * Creating our filtering FormControl instances, which gives us "live filtering"
     * on our columns.
     */
    this.LastName = this.createFormControl('ReportsTo.LastName.like');
    this.FirstName = this.createFormControl('Employee.FirstName.like');
    this.ReportsTo_LastName = this.createFormControl('ReportsTo.LastName.like');
    this.Title = this.createFormControl('Employee.Title.like');
    this.Address = this.createFormControl('Employee.Address.like');
    this.City = this.createFormControl('Employee.City.like');
    this.State = this.createFormControl('Employee.State.like');
    this.Country = this.createFormControl('Employee.Country.like');
    this.PostalCode = this.createFormControl('Employee.PostalCode.like');
    this.Phone = this.createFormControl('Employee.Phone.like');
    this.Fax = this.createFormControl('Employee.Fax.like');
    this.Email = this.createFormControl('Employee.Email.like');
    this.BirthDate = this.createFormControl('Employee.BirthDate.eq');
    this.HireDate = this.createFormControl('Employee.HireDate.eq');
    this.EmployeeId = this.createFormControl('Employee.EmployeeId.eq');
    this.ReportsTo = this.createFormControl('Employee.ReportsTo.eq');
  }

  /**
   * Invoked when user wants to edit an entity
   * 
   * This will show a modal dialog, allowing the user to edit his record.
   */
  public editEntity(entity: any) {

    const dialogRef = this.dialog.open(EditChinook_EmployeeComponent, {
      data: this.getEditData(entity)
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.setEditData(res, entity);
      }
    });
  }

  /**
   * Invoked when user wants to create a new entity
   * 
   * This will show a modal dialog, allowing the user to supply
   * the initial data for the entity.
   */
  public createEntity() {

    const dialogRef = this.dialog.open(EditChinook_EmployeeComponent, {
      data: {
        isEdit: false,
        entity: {},
      }});
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.itemCreated(res);
      }
    });
  }
}
