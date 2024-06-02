import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'chart-apprentissage-note',
  standalone: true,
  templateUrl: './radar-chart-apprentissage-note.component.html',
  styleUrls: ['./radar-chart-apprentissage-note.component.css']
})
export class RadarChartApprentissageNoteComponent implements AfterViewInit, OnDestroy {

  @Input() value!: any;
  @Input() competenceId!:number;
  public chart: any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  createChart() {
    const nomApp = this.value.map((value) =>(value.nom_apprentissage))
    const noteApp = this.value.map((value) =>(value.poids_apprentissage))
    const chartId = 'MyChart' + this.competenceId;
    const canvas = document.getElementById(chartId) as HTMLCanvasElement;

    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'radar', // type de graphique
        data: {
          labels:nomApp,
          datasets: [
            {
              label: "Apprentissage",
              data: noteApp,
              backgroundColor: 'rgba(54, 162, 235, 0.2)'
            },
          ]
        },
        options: {
          aspectRatio: 2,
          plugins: {
            title: {
                display: true,
                text: 'Note de chaque apprentissages'
            }
        }
        }
      });
    } else {
      console.error(`Canvas with id ${chartId} not found`);
    }
  }
}
