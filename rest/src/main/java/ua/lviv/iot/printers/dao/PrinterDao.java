package ua.lviv.iot.printers.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ua.lviv.iot.printers.model.Printer;
import ua.lviv.iot.printers.model.enums.PrinterBrand;

import java.util.List;

@Repository
public interface PrinterDao extends JpaRepository<Printer, Integer> {
    @Query("select printer from Printer printer where printer.brand in :sqlFiltersList")
    List<Printer> findPrinterByFilters(List<PrinterBrand> sqlFiltersList);

    void deleteById(Integer id);
}
