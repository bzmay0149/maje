import { shallowMount } from '@vue/test-utils';
import NavComp from '@/components/NavComp.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'es', // Configura el idioma que deseas utilizar en las pruebas
  messages: {
    es: {
      // Aquí define las traducciones necesarias para tus pruebas
      navbar: {
        home: 'Inicio',
        about: 'Acerca',
        contact: 'Contacto',
        admin: 'Administración'
      }
    }
  }
});

describe('NavComp', () => {
  // Antes de cada prueba, establece el i18n en el wrapper
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NavComp, {
      global: {
        plugins: [i18n]
      }
    });
  });

  // Comprobar que el componente se renderiza correctamente
  test('se renderiza correctamente', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Comprobar que en el componente hay una imagen
  test('contains an image', () => {
    const image = wrapper.find('img');
    expect(image.exists()).toBe(true);
  });

  // Comprobar que el componente contiene una lista con 4 elementos
  test('contains a list with 4 elements', () => {
    const list = wrapper.findAll('.nav-link');
    expect(list).toHaveLength(4);
  });

  // Comprobar que el componente contiene el elemento con la clase ".navbar"
  test('contains the element with class ".navbar"', () => {
    const navbarElement = wrapper.find('.navbar');
    expect(navbarElement.exists()).toBe(true);
  });
});









