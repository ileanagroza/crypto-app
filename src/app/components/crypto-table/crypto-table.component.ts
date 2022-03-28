import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoinService } from 'src/app/services/crypto-info.service';
import { DialogComponent } from '../shared/dialog/dialog.component';


@Component({
  selector: 'crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.scss']
})
export class CryptoTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'symbol', 'price_change_1h', 'price_change_24h', 'market_cap'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  myControl = new FormControl();
  options: string[] = [];
  constructor(private cryptoService: CoinService,
    private dialog: MatDialog) {
  }


  ngOnInit() {
    this.cryptoService.getCoinsListSimple().subscribe((response: any) => {
      this.options = response;
    })
    this.myControl.setValue( 'usd');
    this.getMarketCoinsList(this.myControl.value);
    this.myControl.valueChanges.subscribe((currency: string) => {
      if (currency && this.options.includes(currency)) {
        this.getMarketCoinsList(currency);
      }
    });
  }

  getMarketCoinsList(vs_currency: string) {
    if ((this.options.length && this.options.includes(vs_currency)) || !this.options.length) {
      this.cryptoService.getCoinsList(vs_currency).subscribe((resp: any) => {
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  refreshTable() {
    this.getMarketCoinsList(this.myControl.value);
  }
  openDialog(coinID: string) {
    this.dialog.open(DialogComponent, {data: {id: coinID}});
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
