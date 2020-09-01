package de.f73.regulationserviceapi.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BusinessType {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    // private Long id;
    String type;
    @ManyToOne
    @JoinColumn(name = "regulationId")
    Regulation regulation;
}
