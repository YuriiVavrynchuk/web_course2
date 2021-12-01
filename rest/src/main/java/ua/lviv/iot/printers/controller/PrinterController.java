package ua.lviv.iot.printers.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import ua.lviv.iot.printers.model.Printer;
import ua.lviv.iot.printers.model.enums.PrinterBrand;
import ua.lviv.iot.printers.service.PrinterService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/printers")
public class PrinterController {

    private final PrinterService printerService;

    @GetMapping
    public List<Printer> getAllPrinters(final @RequestParam(value = "filters", required = false) String[] filters) {
        if (filters != null) {
            return filters.length != 0 ? printerService.getPrinters(filters) : printerService.getAllPrinters();
        }
        return printerService.getAllPrinters();
    }

    @GetMapping("/types")
    public PrinterBrand[] getAllPrintersTypes() {
        return PrinterBrand.values();
    }

    @PostMapping
    public Printer createPrinter(final @RequestBody Printer printer) {
        return printerService.createPrinter(printer);
    }

    @PutMapping
    public Printer updatePrinter(final @RequestBody Printer printer) {
        return printerService.updatePrinter(printer);
    }

    @DeleteMapping("/{id}")
    public void deletePrinter(final @PathVariable("id") Integer id) {
        printerService.deletePrinter(id);
    }
}
