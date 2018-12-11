import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getJsonPlanets():any{
    return "{\n" +
        " \"msg\": \"bien hecho, en este punto estamos seguros de que tu prueba será todo un éxito.\",\n" +
        " \"images\": {\n" +
        "     \"mercurio\": {\n" +
        "         \"img\": \"http://www.centroastrologico.com.ar/blog/wp-content/uploads/2015/12/mercurio345.jpg\",\n" +
        "         \"degrees\": \"5\"\n" +
        "     },\n" +
        "     \"venus\": {\n" +
        "         \"img\": \"http://www.misteriosocultos.com/wp-content/uploads/2018/04/venus.jpg\",\n" +
        "         \"degrees\": \"15\"\n" +
        "     },\n" +
        "     \"tierra\": {\n" +
        "         \"img\": \"https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg\",\n" +
        "         \"degrees\": \"25\"\n" +
        "     },\n" +
        "     \"marte\": {\n" +
        "         \"img\": \"https://prod.media.larepublica.pe/720x405/larepublica/imagen/2015/09/27/marte-Noticia-706394.jpg\",\n" +
        "         \"degrees\": \"35\"\n" +
        "     },\n" +
        "     \"jupiter\": {\n" +
        "         \"img\": \"https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/59b277735bafe8cd3b3c9869/jupiter-aurora_0.jpg\",\n" +
        "         \"degrees\": \"45\"\n" +
        "     },\n" +
        "     \"saturno\": {\n" +
        "         \"img\": \"https://www.globalastronomia.com/wp-content/uploads/2017/05/art%C3%ADculo-3-jun-2017-1200x600.jpg\",\n" +
        "         \"degrees\": \"55\"\n" +
        "     },\n" +
        "     \"urano\": {\n" +
        "         \"img\": \"https://i.pinimg.com/originals/2b/33/a6/2b33a6d49a2bf3d89728a3b69b170f69.jpg\",\n" +
        "         \"degrees\": \"65\"\n" +
        "     },\n" +
        "     \"neptuno\": {\n" +
        "         \"img\": \"https://www.caracteristicas.co/wp-content/uploads/2017/05/neptuno-planeta-min-e1494532094217.jpeg\",\n" +
        "         \"degrees\": \"75\"\n" +
        "     },\n" +
        "     \"pluton\": {\n" +
        "         \"img\": \"https://elpais.com/elpais/videos/2017/01/25/videos/1485338520_057249_06292900_fotograma_2.jpg\",\n" +
        "         \"degrees\": \"85\"\n" +
        "     }\n" +
        " }\n" +
        "}";
  }
}
