import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../module/post';

@Injectable()
export class PostsService {
    constructor(private apiService: ApiService ,  private httpClient: HttpClient) {

    }
    getPosts(): Observable<Post[]> {
        return this.apiService.get(environment.staggingApi,
            'main/post', {}, {}, {}).pipe(map((posts: Post[]) => posts));
            // code without my wrapper
            // let h = new HttpHeaders();
            // h.set('X-AUTH-TOKEN',
            //  'b50fa09f92da9afc709738dcfe0398a50df0f400632594ade1abb824f02b8741d3764fc147cba74238a7a038e436fa247e820f103e0d89e0015b293300b546ca')
            // return this.httpClient.get(environment.staggingApi + 'main/post',
            //     // tslint:disable-next-line:max-line-length
            //     { headers: h})
            //     .pipe(map((posts: Post[]) => posts));
    }
}
