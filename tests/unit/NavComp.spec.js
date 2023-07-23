import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import NavComp from '@/components/NavComp.vue';


// comprobar que en el componente hay una imagen

describe('NavComp', () => {
  test('contains an image', () => {
    const wrapper = mount(NavComp);

    expect(wrapper.exists()).toBe(true);

    
    const image = wrapper.find('img');
    expect(image.exists()).toBe(true);
  });
});

// Comprobar que el componente contiene una lista con 4 elementos
describe('NavComp', () => {
    test('contains a list with 4 elements', () => {
      const wrapper = mount(NavComp);
  
     
      expect(wrapper.exists()).toBe(true);
  
      const list = wrapper.findAll('.nav-link');
      expect(list).toHaveLength(4);
    });
  });
    //comprobar que el componente contiene el elemento con la clase ".navbar
  test('NavComp contiene el elemento con la clase ".navbar"', () => {
    const wrapper = mount(NavComp);
    const navbarElement = wrapper.find('.navbar');
    expect(navbarElement.exists()).toBe(true);
  });
  
// Comprobar que el componente se haya renderizado sin errores
describe('NavComp', () => {
  it('se renderiza correctamente', () => {
   
    const wrapper = shallowMount(NavComp);

    
    expect(wrapper.exists()).toBe(true);
  });
});









