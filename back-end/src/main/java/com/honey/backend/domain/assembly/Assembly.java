package com.honey.backend.domain.assembly;


import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.region.electionregion.ElectionRegion;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Transactional
@Table(name = "assembly")
public class Assembly {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assembly_id")
    private Long id;

    private String assemblyImgUrl;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "poly_id")
    private Poly poly;


    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "election_region_id")
    private ElectionRegion electionRegion;

    @Column(unique = true)
    private String monaCd;
    private String hgName;
    private String hjName;
    private String engName;
    private String birthDate;
    private String origName;
    private String reeleGbn;
    private String units;
    private String gender;

    @Lob
    @Column(length = 65535)
    private String memTitle;

    private String email;
    private int plenaryAttendance;
    private int standingAttendance;


    private Assembly(String assemblyImgUrl, Poly poly, ElectionRegion electionRegion, String monaCd, String hgName, String hjName, String engName, String birthDate, String origName, String reeleGbn, String units, String gender, String memTitle, String email, int plenaryAttendance, int standingAttendance) {
        this.assemblyImgUrl = assemblyImgUrl;
        this.poly = poly;
        this.electionRegion = electionRegion;
        this.monaCd = monaCd;
        this.hgName = hgName;
        this.hjName = hjName;
        this.engName = engName;
        this.birthDate = birthDate;
        this.origName = origName;
        this.reeleGbn = reeleGbn;
        this.units = units;
        this.gender = gender;
        this.memTitle = memTitle;
        this.email = email;
        this.plenaryAttendance = plenaryAttendance;
        this.standingAttendance = standingAttendance;
    }

    private Assembly(String hgName, Poly poly, ElectionRegion electionRegion) {
        this.hgName = hgName;
        this.poly = poly;
        this.electionRegion = electionRegion;
    }

    public static Assembly createAssembly(String assemblyImgUrl, Poly poly, ElectionRegion electionRegion, String monaCd, String hgName, String hjName, String engName, String birthDate, String origName, String reeleGbn, String units, String gender, String memTitle, String email, int plenaryAttendance, int standingAttendance) {
        return new Assembly(assemblyImgUrl, poly, electionRegion, monaCd, hgName, hjName, engName, birthDate, origName, reeleGbn, units, gender, memTitle, email, plenaryAttendance, standingAttendance);
    }

    public static Assembly createUnknownAssembly(String hgName, Poly poly, ElectionRegion electionRegion) {
        return new Assembly(hgName, poly, electionRegion);

    }

    public void updateImage(String assemblyImgUrl) {
        this.assemblyImgUrl = assemblyImgUrl;
    }

}
