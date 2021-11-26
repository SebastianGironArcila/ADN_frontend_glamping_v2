
import { CrearReserva } from '../../page/reserva/crear-reserva.po';
import { AppPage } from '../../app.po';
import { ToolBarPage } from '../../page/toolbar/toolbar.po';
import { browser } from 'protractor';



describe('Crear reserva',  () => {
    
    let page: AppPage
    let menu: ToolBarPage;
    let crearReserva: CrearReserva;
    const RESERVA_CREADA = "Reserva creada correctamente";
   

    beforeEach(() => {
        page = new AppPage();
        menu = new ToolBarPage();
        crearReserva = new CrearReserva();
    
    });

    it('Deberia crear la reserva', () => {
        const NOMBRE = 'Mauricio';
        const CEDULA = '1118589632';
        const CANT_PERSONAS=2;
        const TELEFONO  = '3053198749';

        page.navigateTo();
        browser.sleep(1000)
         menu.clickBotonReserva();
        browser.sleep(1000)
         menu.clickBotonCrearReserva();
        browser.sleep(1000)
         crearReserva.clickInputNombre();
        browser.sleep(1000)
         crearReserva.ingresarNombre(NOMBRE);
        browser.sleep(1000)
         crearReserva.clickInputCedula();
        browser.sleep(1000)
         crearReserva.ingresarCedula(CEDULA);
        browser.sleep(1000)
         crearReserva.clickInputGlamping();
        browser.sleep(1000)
         crearReserva.clickOpcionIdGlamping();
        browser.sleep(1000)
         crearReserva.clickPickerFechaEntrada();
        browser.sleep(1000)
         crearReserva.clickAniosPickerFechaEntrada();
        browser.sleep(1000)
         crearReserva.clickBotonAdelanteAniosPickerFechaEntrada();
        browser.sleep(1000)
         crearReserva.clickBotonAnioPickerFechaEntrada();
        browser.sleep(1000)
         crearReserva.clickBotonMesPickerFechaEntrada();
        browser.sleep(1000)
         crearReserva.clickBotonDiaPickerFechaEntrada();
        browser.sleep(1000)
         crearReserva.clickPickerFechaSalida();
        browser.sleep(1000)
         crearReserva.clickAniosPickerFechaSalida();
        browser.sleep(1000)
         crearReserva.clickBotonAdelanteAniosPickerFechaSalida();
        browser.sleep(1000)
         crearReserva.clickBotonAnioPickerFechaSalida();
        browser.sleep(1000)
         crearReserva.clickBotonMesPickerFechaSalida();
        browser.sleep(1000)
         crearReserva.clickBotonDiaPickerFechaSalida();   
        browser.sleep(2000)     
         crearReserva.clickInputCantPersonas();
        browser.sleep(1000)
         crearReserva.ingresarCantPersonas(CANT_PERSONAS)
        browser.sleep(1000)
         crearReserva.clickInputTelefono();
        browser.sleep(1000)
         crearReserva.ingresarTelefono(TELEFONO);
        browser.sleep(1000)
         crearReserva.clickBotonGuardarReserva();
        browser.sleep(1000)
        const alerta =  crearReserva.getTextoSwal();
        expect(alerta).toEqual(RESERVA_CREADA);
        browser.sleep(1000)
    
        
    })

});