import { Component } from "@angular/core";
import { MaterializeDirective } from "angular2-materialize";

@Component({
    selector: "my-component",
    directives: [MaterializeDirective],
    template: `
    <!-- Modal Trigger -->
    <div class="waves-effect btn modal-trigger">Modal</div>
    <!-- Modal Structure -->
    <!--<div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div-->
      `
})
export class AppComponent{}
