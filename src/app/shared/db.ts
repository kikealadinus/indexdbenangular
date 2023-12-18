import Dexie, { Table } from 'dexie';
import { Historia } from './historias.model';

export class AppDB extends Dexie {
  historias!: Table<Historia, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(2).stores({
      historias: 'id, title, description',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await db.historias.bulkAdd([
      {
        id: 1,
        title: 'JONÁS Y EL GRAN PEZ',
        description:
          'Jonás es como nosotros, es como el hijo de la parábola que dice que no va, pero luego va. Todos podemos encontrar en Jonás esa fuerza para ser obedientes a Dios aunque en un primer momento nos corramos y nos cueste; aunque dudemos y pongamos en tela de juicio sus planes. La historia de Jonás es la historia de un hombre que decidió dejar de correr y comenzar a obedecer.',
      },
      {
        id: 2,
        title: 'JOSÉ Y SUS HERMANOS',
        description:
          'La historia de José es increíble. Es una historia llena de la acción de Dios. Es la historia de nuestra vida, una vida en la que creemos tenerlo todo controlado, pero en la que, el amor de Dios quebranta nuestro orgullo y nos muestra un camino diferente. Cuando pasa esto, sentimos que Dios nos abandona, que nos arrebata nuestros sueños, pero, al final, descubrimos que Su plan es mejor que el nuestro y que por sus caminos (sin ahorrarnos sufrimientos) se va mejor.',
      },
      {
        id: 3,
        title: 'EL FARISEO NICODEMO',
        description:
          'espués de esto, José de Arimatea, que era discípulo de Jesús, aunque en secreto por miedo a los judíos, pidió a Pilato autorización para retirar el cuerpo de Jesús. Pilato se lo concedió. Fueron, pues, y retiraron su cuerpo. Fue también Nicodemo -aquel que anteriormente había ido a verle de noche- con una mezcla de mirra y áloe de unas cien libras. Tomaron el cuerpo de Jesús y lo envolvieron en vendas con los aromas, conforme a la costumbre judía de sepultar.',
      },
    ]);
  }
}

export const db = new AppDB();
