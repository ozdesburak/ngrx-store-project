import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../models/auth';
import { Contact, contactId } from '../models/contactModel';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { CountryList } from '../models/countryList';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
    countryListEn = <CountryList[]> [
        { id: "TR", name: "Turkey" },
        { id: "US", name: "United States of America"},
        { id: "GB", name: "United Kingdom"},
        { id: "DE", name: "Germany"},
        { id: "SE", name: "Sweden" },
        { id: "KE", name: "Kenya"},
        { id: "BR", name: "Brazil" },
        { id: "ZW", name: "Zimbabwe" }
      ]
    countryListTr = <CountryList[]> [
        { id: "TR",  name:"Türkiye" },
        { id: "US",  name:"Amerika Birleşik Devletleri"},
        { id: "GB",  name:"Birleşik Krallık" },
        { id: "DE",  name:"Almanya" },
        { id: "SE",  name:"İsveç" },
        { id: "KE",  name:"Kenya" },
        { id: "BR",  name:"Brezilya" },
        { id: "ZW",  name:"Zimbabve" }
      ] 
      
      cardJsonEn= <Card>{
        "title_headind":"Title Heading",
        "title_description":" Title description",
        "date":"Jun 7, 2021",
        "img":"www.google.com",
        "p_one":"Some text..",
        "p_two":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
      cardJsonTr= <Card>{
        "title_headind":"Başlık Başlığı",
        "title_description":" Başlık Açıklaması",
        "date":"Hazira 7, 2021",
        "img":"www.google.com",
        "p_one":"Bazı metinler..",
        "p_two":"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur."
      }
      
  constructor(private http: HttpClient) { }

  getCountry(lang: string) : CountryList[] {
     const langS = {"en": this.countryListEn, "tr":this.countryListTr}
     return langS[lang]
  }
  getCard(lang: string) : Card {
     const langS = {"en": this.cardJsonEn, "tr":this.cardJsonTr}
     return langS[lang]
  }



}

