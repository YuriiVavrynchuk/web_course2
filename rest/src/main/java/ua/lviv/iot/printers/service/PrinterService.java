package ua.lviv.iot.printers.service;

import ua.lviv.iot.printers.model.Printer;

import java.util.List;

public interface PrinterService {
    List<Printer> getAllPrinters();

    List<Printer> getPrinters(String[] filters);

    Printer createPrinter(Printer printer);

    Printer updatePrinter(Printer printer);

    void deletePrinter(Integer id);
}
