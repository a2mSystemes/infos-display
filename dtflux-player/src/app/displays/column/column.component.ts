import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Runner, RunnerResult, RunnerResults } from 'src/app/dtflux-ui-model/IRunner';
import { MockingService } from 'src/app/services/mocking.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})

export class ColumnComponent implements OnInit{
  _runnersResult$:RunnerResults = new RunnerResults();
  subRunnerResult!: Subscription;
  tableData: any[] = [];
  runner?: RunnerResult;
  indexColonne: number = -1;
  firstM: RunnerResult = new RunnerResult();


  constructor(private _mockingService:MockingService){
    this.subRunnerResult = this._mockingService.subscribeRunnersResults().subscribe({next : (runners: Array<RunnerResult>) => {
      this._runnersResult$.runners = runners;
      this.tableData = runners;
      let i=0;
      for (let runner of runners){
          if(runners[i].currentSplitRank && (runner.gender === "M" || runner.contestId === 1)){
            if(runner.currentSplitRank === 1) this.firstM = runner;
          }
      }
    }});

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
