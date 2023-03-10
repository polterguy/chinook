/*
 * Automatically generated by Magic
 */
import { throwError } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http-service';
import { DialogComponent, DialogData } from '@app/base/dialog.component';

/**
 * Modal dialog for editing your existing Employee entity types, and/or
 * creating new entity types of type Employee.
 */
@Component({
  templateUrl: './edit.chinook_Employee.component.html'
})
export class EditChinook_EmployeeComponent extends DialogComponent {

  /**
   * Constructor taking a bunch of services injected using dependency injection.
   */
  constructor(
    public dialogRef: MatDialogRef<EditChinook_EmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    protected snackBar: MatSnackBar,
    public service: HttpService) {
    super(snackBar);
    this.primaryKeys = ['EmployeeId'];
    this.createColumns = [
      'LastName',
      'FirstName',
      'ReportsTo',
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
      'EmployeeId'
    ];
    this.updateColumns = [
      'LastName',
      'FirstName',
      'ReportsTo',
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
      'EmployeeId'
    ];
    const datesToFormat: string[] = ['BirthDate', 'HireDate'];
    for (let idx of datesToFormat) {
      if (this.data.entity[idx]) {
        if (typeof this.data.entity[idx] === 'string') {
          if ((<string>this.data.entity[idx]).indexOf('+') === -1 && (<string>this.data.entity[idx]).indexOf('Z') === -1) {
            this.data.entity[idx] += 'Z';
          }
        }
        this.data.entity[idx] = new Date(this.data.entity[idx]);
      }
    }
  }

  /**
   * Returns a reference to ths DialogData that was dependency injected
   * into component during creation.
   */
  protected getData() {
    return this.data;
  }
                             
  /**
   * Returns a reference to the update method, to update entity.
   */
  protected getUpdateMethod() {
    return this.service.chinook_Employee.update(this.data.entity);
  }
  /**
   * Returns a reference to the create method, to create new entities.
   */
  protected getCreateMethod() {
    return this.service.chinook_Employee.create(this.data.entity);
  }

  /**
   * Closes dialog.
   * 
   * @param data Entity that was created or updated
   */
  public close(data: any) {
    if (data) {
      this.dialogRef.close(data);
    } else {
      this.dialogRef.close();
    }
  }
}
