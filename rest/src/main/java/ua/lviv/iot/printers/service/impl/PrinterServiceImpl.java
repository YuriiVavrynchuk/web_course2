package ua.lviv.iot.printers.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ua.lviv.iot.printers.dao.PrinterDao;
import ua.lviv.iot.printers.model.Printer;
import ua.lviv.iot.printers.model.enums.PrinterBrand;
import ua.lviv.iot.printers.service.PrinterService;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PrinterServiceImpl implements PrinterService {

    private final PrinterDao printerDao;

    @Override
    public List<Printer> getAllPrinters() {
        return printerDao.findAll();
    }

    @Override
    public List<Printer> getPrinters(String[] filters) {
        return printerDao.findPrinterByFilters(Arrays.stream(filters).map(PrinterBrand::valueOf).collect(Collectors.toList()));
    }

    @Override
    public Printer createPrinter(Printer printer) {
        return printerDao.save(printer);
    }

    @Override
    public Printer updatePrinter(Printer printer) {
        return printerDao.save(printer);
    }

    @Override
    public void deletePrinter(Integer id) {
        printerDao.deleteById(id);
    }
}
