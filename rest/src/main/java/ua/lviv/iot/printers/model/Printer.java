package ua.lviv.iot.printers.model;

import lombok.*;
import ua.lviv.iot.printers.model.enums.PrinterBrand;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Printer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private PrinterBrand brand;

    private String model;

    private Integer power;

    private Integer price;
}
