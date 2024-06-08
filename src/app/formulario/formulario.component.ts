import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  resultado = "Esperando que se ingrese datos" 
  urlImage = "data:image/jpeg;base64,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"

    mostrarMensaje = false;

    formImc = {
      talla : null,
      peso :null
    }
    pacienteList: Paciente = []

calcularimc(): void {
  
  let tallam = Number(this.formImc.talla) / 100
  let ValorImc = Number(this.formImc.peso) / (tallam * tallam)
  var diagnostico =""
  if(ValorImc < 18.5){
    diagnostico = "peso inferior"
  }else if(ValorImc >= 18.5 && ValorImc < 24.9){
    diagnostico = "peso normal"
  }else if(ValorImc >= 25 && ValorImc < 29.9){
    diagnostico = "peso Sobrepeso"
  }else if( ValorImc < 34.9){
    diagnostico = "peso Obeso"
  }else{
    diagnostico = "obesidad extrema"
  }

  this.resultado = "Su imc es : " + ValorImc.toFixed(2) + " " + diagnostico
  this.pacienteList.push({
    id: this.pacienteList.length + 1,
    valor: ValorImc.toFixed(2).toString(),
    diagnostico:diagnostico
  }
  );
  //console.log(this.pacientesList);
  this.mostrarMensaje = true;
}

}
  type Paciente = Array<{id : number , valor : String , diagnostico : string }>
