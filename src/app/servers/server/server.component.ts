import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute ,
              private router: Router ) { }

  ngOnInit() {
    const idServer = +this.route.snapshot.params['id'];
    console.log('aqui', this.route.snapshot);
    this.server = this.serversService.getServer(idServer);

    this.route.params.subscribe((e: Params)=>{
      this.server = this.serversService.getServer(+e['id']);
    });

  }

  onEdit(){
    this.router.navigate(['edit'],
                          { relativeTo: this.route,
                            queryParamsHandling: 'preserve'
                          });
  }

}
