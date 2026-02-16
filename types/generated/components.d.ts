import type { Schema, Struct } from '@strapi/strapi';

export interface EquipeEquipePedagogique extends Struct.ComponentSchema {
  collectionName: 'components_equipe_equipe_pedagogiques';
  info: {
    displayName: 'equipe_pedagogique';
  };
  attributes: {
    email: Schema.Attribute.Email;
    fonction: Schema.Attribute.String;
    nom: Schema.Attribute.String & Schema.Attribute.Required;
    prenom: Schema.Attribute.String & Schema.Attribute.Required;
    telephone: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SuiviEntretiens extends Struct.ComponentSchema {
  collectionName: 'components_suivi_entretiens';
  info: {
    displayName: 'entretiens';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
    difficultes: Schema.Attribute.Blocks;
    missions_realisees: Schema.Attribute.Blocks;
    numero: Schema.Attribute.Integer;
    objectifs_suivants: Schema.Attribute.Blocks;
    points_positifs: Schema.Attribute.Blocks;
    signature_apprenti: Schema.Attribute.Boolean;
    signature_formateur: Schema.Attribute.Boolean;
    signature_tuteur: Schema.Attribute.Boolean;
  };
}

export interface SuiviNotesLiaison extends Struct.ComponentSchema {
  collectionName: 'components_suivi_notes_liaisons';
  info: {
    displayName: 'notes_liaison';
  };
  attributes: {
    auteur: Schema.Attribute.String;
    date: Schema.Attribute.DateTime;
    observation: Schema.Attribute.Text;
  };
}

export interface SuiviSuivisCompetences extends Struct.ComponentSchema {
  collectionName: 'components_suivi_suivis_competences';
  info: {
    displayName: 'suivis_competences';
  };
  attributes: {
    activites_realisees: Schema.Attribute.Blocks;
    bloc_titre: Schema.Attribute.String;
    commentaire_apprenti: Schema.Attribute.Text;
    commentaire_formateur: Schema.Attribute.Text;
    commentaire_tuteur: Schema.Attribute.Text;
    niveau_atteint: Schema.Attribute.Enumeration<
      ['d\u00E9butant', 'en_progression', 'autonome']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'equipe.equipe-pedagogique': EquipeEquipePedagogique;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'suivi.entretiens': SuiviEntretiens;
      'suivi.notes-liaison': SuiviNotesLiaison;
      'suivi.suivis-competences': SuiviSuivisCompetences;
    }
  }
}
